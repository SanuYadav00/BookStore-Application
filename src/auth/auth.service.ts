import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { User, UserDocument } from '../users/user.schema';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
    private configService: ConfigService // ✅ Inject ConfigService
  ) {}

  async signup(dto: SignupDto) {
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = new this.userModel({ email: dto.email, password: hashed });
    return user.save();
  }

  // async login(dto: LoginDto) {
  //   console.log('🚀 Login route hit with:', dto);
  //   console.log('🧪 JWT_SECRET from process.env:', process.env.JWT_SECRET);
  //   console.log('🧪 JWT_SECRET from configService:', this.configService.get('JWT_SECRET'));

  //   const user = await this.userModel.findOne({ email: dto.email });
  //   console.log('🔐 Logging in user with email:', dto.email);
  //   console.log('🧠 User found in DB:', user);

  //   if (!user) throw new UnauthorizedException('Invalid credentials');

  //   const isMatch = await bcrypt.compare(dto.password, user.password);
  //   console.log('🔍 Password match result:', isMatch);

  //   if (!isMatch) throw new UnauthorizedException('Invalid credentials');

  //   const payload = { sub: user._id, email: user.email };
  //   const token = this.jwtService.sign(payload); // 💥 This will throw error if secret is not properly set
  //   return { token };
  // }
  async login(dto: LoginDto) {
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
  

}
