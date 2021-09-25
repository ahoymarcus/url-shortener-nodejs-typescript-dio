import { prop, Typegoose } from '@hasezoey/typegoose';



export class URL extends Typegoose {
	@prop({ required: true })
	hash: String
	
	@prop({ required: true })
	originalURL: String
	
	@prop({ required: true })
	shortURL: string
}



export const URLModel = new URL().getModelForClass(URL)


