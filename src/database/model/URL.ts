import { prop, Typegoose } from '@hasezoey/typegoose';



export class URL extends Typegoose {
	@prop({ required: true })
	hash: string
	
	@prop({ required: true })
	originalURL: string
	
	@prop({ required: true })
	shortURL: string
}



export const URLModel = new URL().getModelForClass(URL)


