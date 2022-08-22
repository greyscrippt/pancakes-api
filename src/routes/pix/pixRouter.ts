// TODO: organize json payload in CRUD

import { Router } from "express";

import * as GerenciaNetController from '../../controllers/pix/GerenciaNetController';

const PixRouter = Router();

// Gerar boleto.
PixRouter.post('/boleto', async(req, res) => {
});

// Gerar QR code.
PixRouter.get('/qrcode', async (req, res) => {
    const r = GerenciaNetController.generateQRCode(req, res);
});

export default PixRouter;