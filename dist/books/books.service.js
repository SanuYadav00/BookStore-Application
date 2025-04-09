"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const book_schema_1 = require("./book.schema");
let BooksService = class BooksService {
    bookModel;
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async create(dto) {
        const book = new this.bookModel(dto);
        return book.save();
    }
    async findAll(query) {
        const filter = {};
        if (query.author)
            filter.author = query.author;
        if (query.category)
            filter.category = query.category;
        if (query.rating)
            filter.rating = { $gte: Number(query.rating) };
        if (query.title)
            filter.title = { $regex: query.title, $options: 'i' };
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;
        const skip = (page - 1) * limit;
        const sortField = query.sortBy || 'price';
        const sortOrder = query.order === 'desc' ? -1 : 1;
        return this.bookModel
            .find(filter)
            .sort({ [sortField]: sortOrder })
            .skip(skip)
            .limit(limit)
            .exec();
    }
    async findOne(id) {
        const book = await this.bookModel.findById(id);
        if (!book)
            throw new common_1.NotFoundException('Book not found');
        return book;
    }
    async update(id, dto) {
        const updated = await this.bookModel.findByIdAndUpdate(id, dto, { new: true });
        if (!updated)
            throw new common_1.NotFoundException('Book not found');
        return updated;
    }
    async remove(id) {
        const deleted = await this.bookModel.findByIdAndDelete(id);
        if (!deleted)
            throw new common_1.NotFoundException('Book not found');
        return { message: 'Book deleted successfully' };
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(book_schema_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BooksService);
//# sourceMappingURL=books.service.js.map