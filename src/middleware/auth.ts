import { NextFunction, Request, Response } from "express";
import { encode, decode, TAlgorithm } from 'jwt-simple';

import UserModel from "../data/models/UserModel";
import logger from "../logging/logger";

interface UserInterface {
    id:           number;
    dateCreated:  number;
    username:     string;
    password:     string;
}

interface Session {
  id:             number,
  dateCreated:    number,
  username:       string,
  issued:         number,
  expires:        number,
}

type PartialSession = Omit<Session, "issued" | "expires">;

interface EncodeResult {
  token:    string,
  expires:  number,
  issued:   number,
}

type ValidResult = {
  type: "valid";
  session: Session;
};

type IntegrityErrorResult = {
  type: "integrity-error";
};

type InvalidTokenResult = {
  type: "invalid-token";
};

type DecodeResult = ValidResult | IntegrityErrorResult | InvalidTokenResult;

type ExpirationStatus = "expired" | "active" | "grace";

function encodeSession(secretKey: string, partialSession: PartialSession): EncodeResult {
  const algorithm: TAlgorithm = "HS512";
  const issued                = Date.now();
  const fifteenMinutesInMs        = 15 * 60 * 1000;
  const expires               = issued + fifteenMinutesInMs;
  const session: Session = {
    ...partialSession,
    issued:     issued,
    expires:    expires,
  };

  const result: EncodeResult = {
    token:      encode(session, secretKey, algorithm),
    issued:     issued,
    expires:    expires,
  }

  return result;
}

function decodeSession(secretKey: string, tokenString: string): DecodeResult {
  const algorithm: TAlgorithm = "HS512";

  let result: Session;

  try {
    result = decode(tokenString, secretKey, false, algorithm);
  } catch (_e) {
    const e: Error = _e;

    if (e.message === "No token supplied" || e.message === "Not enough or too many segments") {
      return {
        type: "invalid-token"
      };
    }

    if (e.message === "Signature verification failed" || e.message === "Algorithm not supported") {
      return {
        type: "integrity-error"
      };
    }

    // Handle json parse errors, thrown when the payload is nonsense
    if (e.message.indexOf("Unexpected token") === 0) {
      return {
        type: "invalid-token"
      };
    }

    throw e;
  }

  return {
    type: "valid",
    session: result,
  }
}

function checkExpirationStatus(token: Session): ExpirationStatus {
  const now = Date.now();

  if( token.expires > now ) return "active";

  const threeHoursInMs = 3 * 60 * 60 * 1000;
  const threeHoursAfterExpiration = token.expires + threeHoursInMs;

  if( threeHoursAfterExpiration > now ) return "grace";

  return "expired";
}

function authMiddleware(req: Request, res: Response, next: NextFunction) {   
  const unauthorized = (message: string) => res.status(401).json({
    ok: false,
    status: 401,
    message: message,
  });

  const requestHeader   = "X-JWT-Token";
  const responseHeader  = "X-Renewed-JWT-Token";
  const header          = req.header(requestHeader);

  if( !header ) {
    unauthorized(`Required ${requestHeader} header not found.`);
    return;
  }

  const decodedSession: DecodeResult = decodeSession(process.env.TOKEN_SECRET, header);

  if( decodedSession.type === "integrity-error" || decodedSession.type === "invalid-token" ) {
    unauthorized(`Failed to decode or validate authorization token. Reason: ${decodedSession.type}.`);
    return;
  }

  const expiration: ExpirationStatus = checkExpirationStatus(decodedSession.session);

  if( expiration === "expired" ) {
    unauthorized(`Authorization token has expired. Please create a new authorization token.`);
    return;
  }

  let session: Session;

  if( expiration === "grace" ) {
    const { token, expires, issued } = encodeSession(process.env.TOKEN_SECRET, decodedSession.session);
    session = {
      ...decodedSession.session,
      expires: expires,
      issued: issued,
    };

    res.setHeader(responseHeader, token);
  } else {
    session = decodedSession.session;
  }

  res.locals = {
    ...res.locals,
    session: session,
  }

  next();
}

function signTokenMiddleware(req: Request, res: Response, next: NextFunction) {
  // TODO: Validate users
  const session = encodeSession( process.env.TOKEN_SECRET, {
    id: 12345,
    username: "some user",
    dateCreated: Date.now(),
  });

  res.status(201).json(session);
}

async function createUserMiddleware(req: Request, res: Response) {
    const user = req.body;

    if(!user || !user.username || !user.password || !user.email) {
        res.status(400).json({ msg: "No user data provided" })
        return;
    }

    const userExists = await UserModel.exists({ username: user.username, password: user.password });

    if(userExists) {
        res.status(400).json({ msg: "User already exists" });
        return;
    }

    UserModel.create({
        username:   user.username,
        email:      user.email,
        password:   user.password,
        roles:      user.roles,
    }).then((userCreated) => {
      logger.info("Created user successfully!");
      res.status(200).json({ msg: "Success" })
    }).catch((err) => {
      logger.error(err);
      res.status(400).json({ msg: "Failed to create user" });
    });
}

export { authMiddleware, createUserMiddleware, signTokenMiddleware };
