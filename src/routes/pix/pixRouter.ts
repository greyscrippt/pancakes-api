// TODO: organize json payload in CRUD

import { Router } from "express";

import * as GerenciaNetController from '../../controllers/pix/GerenciaNetController';

const PixRouter = Router();

// Testar endpoint.
PixRouter.get('/test', async(req, res) => {
    res.send("Hello, world!\n");
});

// Gerar boleto.
PixRouter.post('/boleto', async(req, res) => {
    res.send("Helloww");
});

// Gerar QR code.
PixRouter.get('/qrcode', async (req, res) => {
    const r = GerenciaNetController.generateQRCode(req, res);
});

export default PixRouter;