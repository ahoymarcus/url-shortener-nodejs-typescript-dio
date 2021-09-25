import { Request, Response } from 'express';
import shortId from 'shortid';

import { config } from '../config/Constants';



export class URLController {
	public async shorten(req: Request, res: Response): Promise<void> {
		
		// 1. Conferir se a URL já existe
		// 2. Criar o hash de ref para a nova URL
		// 3. Salvar a URL no banco
		// 4. Retornar a URL que foi salva pela app
		
		// 1.
		
		// 2.
		console.log(req.body);
		const { originalURL } = req.body;
		const hash = shortId.generate();
		
		const shortURL = `${config.API_URL}/${hash}`;
		
		// 3.
		
		// 4.
		res.json({ originalURL, hash, shortURL });
	}
}




