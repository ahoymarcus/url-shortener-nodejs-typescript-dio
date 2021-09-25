import { Request, Response } from 'express';
import shortId from 'shortid';

import { config } from '../config/Constants';
import { URLModel } from '../database/model/URL';




export class URLController {
	public async shorten(req: Request, res: Response): Promise<void> {
		
		// 1. Conferir se a URL já existe
		// 2. Criar o hash de ref para a nova URL
		// 3. Salvar a URL no banco
		// 4. Retornar a URL que foi salva pela app
		
		// 1.
		console.log(req.body);
		const { originalURL } = req.body;
		const url = await URLModel.findOne({ originalURL });
		
		if (url) {
			res.json(url);
			
			return;
		}
		
		// 2.
		
		const hash = shortId.generate();
		const shortURL = `${config.API_URL}/${hash}`;
		
		// 3.
		const newURL = await URLModel.create({ hash, shortURL, originalURL });
		
		// 4.
		//res.json({ originalURL, hash, shortURL });
		res.json(newURL);
	}
	
	
	public async redirect(req: Request, res: Response): Promise<void> {
		// 1. Pegar o hash da URL
		// 2. Encontrar a URL original pelo hash
		// 3. Redirecionar para a URL original a partir do que encontramos no DB
		
		
		// 1.
		const { hash } = req.params;
			
		// 2.
		/*Criando um MOCK para TESTE*/
		const urlMock = {
			"originalURL": "https://web.digitalinnovation.one/home",
			"hash": "L1gKwOanR",
			"shortURL": "http://localhost:5000/L1gKwOanR"
		};
		
		const url = await URLModel.findOne({ hash });
		
		if (url) {
			res.redirect(url.originalURL);
			
			return;
		}
		
		// 3.
		res.status(400).json({ error: 'URL not fount' });
	}
	
}




