import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(dto: CreateBookDto): Promise<Book> {
    const book = new this.bookModel(dto);
    return book.save();
  }

  async findAll(query: any): Promise<Book[]> {
    const filter: any = {};
  
    if (query.author) filter.author = query.author;
    if (query.category) filter.category = query.category;
    if (query.rating) filter.rating = { $gte: Number(query.rating) };
    if (query.title) filter.title = { $regex: query.title, $options: 'i' };
  
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const skip = (page - 1) * limit;
  
    const sortField = query.sortBy || 'price'; // or 'rating'
    const sortOrder = query.order === 'desc' ? -1 : 1;
  
    return this.bookModel
      .find(filter)
      .sort({ [sortField]: sortOrder })
      .skip(skip)
      .limit(limit)
      .exec();
  }
  
  

  async findOne(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id);
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async update(id: string, dto: UpdateBookDto): Promise<Book> {
    const updated = await this.bookModel.findByIdAndUpdate(id, dto, { new: true });
    if (!updated) throw new NotFoundException('Book not found');
    return updated;
  }

  async remove(id: string): Promise<{ message: string }> {
    const deleted = await this.bookModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Book not found');
    return { message: 'Book deleted successfully' };
  }
}
