import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema({ timestamps: true })
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  category: string;

  @Prop()
  price: number;

  @Prop()
  rating: number;

  @Prop()
  publishedDate: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
