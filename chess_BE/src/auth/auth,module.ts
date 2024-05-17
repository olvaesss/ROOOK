import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwtStrategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secretOrPrivateKey: 'dsaewrupsberpuignpeirjngpj2iuh2',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [],
  providers: [AuthService, JwtStrategy,JwtService],
  exports:[JwtService],
})
export class AuthModule {}