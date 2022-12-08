import jwt from "jsonwebtoken";

function generateToken(data: any) {
    if(!data) return;

    return jwt.sign(data, process.env.TOKEN_SECRET);
}

function validateToken(data: any) {
    if(!data) return;

    return jwt.verify(data, process.env.TOKEN_SECRET);
}

const TokenManager = {
    generateToken,
    validateToken,
};

export default TokenManager;
