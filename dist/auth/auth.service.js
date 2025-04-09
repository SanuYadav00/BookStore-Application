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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const user_schema_1 = require("../users/user.schema");
let AuthService = class AuthService {
    userModel;
    jwtService;
    configService;
    constructor(userModel, jwtService, configService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async signup(dto) {
        const hashed = await bcrypt.hash(dto.password, 10);
        const user = new this.userModel({ email: dto.email, password: hashed });
        return user.save();
    }
    async login(dto) {
        console.log('🚀 Login route hit with:', dto);
        console.log('🔐 Logging in user with email:', dto.email);
        const user = await this.userModel.findOne({ email: dto.email });
        console.log('🧠 User found in DB:', user);
        if (!user) {
            console.log('🆕 No user found, creating one...');
            const newUser = new this.userModel({ email: dto.email, password: 'fake' });
            await newUser.save();
            console.log('✅ New user created:', newUser);
        }
        const payload = { sub: user?._id, email: dto.email };
        const token = this.jwtService.sign(payload);
        console.log('🎟️ JWT Token issued:', token);
        return { token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map