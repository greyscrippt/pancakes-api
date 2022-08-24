import { Request, Response } from 'express';
import { Payment } from './GerenciaNetTypes';

const GerenciaNetClient = require('gn-api-sdk-node');

const options = {
	// PRODUÇÃO = false
	// HOMOLOGAÇÃO = true
	sandbox: false,
	client_id: 'seuClientId',
	client_secret: 'seuClientSecret',
	pix_cert: 'caminhoAteOCertificadoPix',
};

const gnet = new GerenciaNetClient(options);

async function generateQRCode(req: Request, res: Response) {
    const test: string = req.body;
    
    res.send(test);
}

export {
    generateQRCode,
};