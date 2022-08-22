import { Request, Response } from 'express';

async function generateQRCode(req: Request, res: Response) {
    res.send('success');
    return('success');
}

export {
    generateQRCode,
};