import { Model } from 'mongoose';
import { Book, BookDocument } from './book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksService {
    private bookModel;
    constructor(bookModel: Model<BookDocument>);
    create(dto: CreateBookDto): Promise<Book>;
    findAll(query: any): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    update(id: string, dto: UpdateBookDto): Promise<Book>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
