import express, { Request, Response } from 'express';

import { URLController } from './controller/URLController';


const api = express();

api.use(express.json());


api.get('/test', (req: Request, res: Response) => {
	res.json({ sucess: true });
});


const urlController = new URLController();
api.post('/shorten', urlController.shorten);


 





api.listen(5000, () => {
	console.log('Express listening at localhost:5000');
});









