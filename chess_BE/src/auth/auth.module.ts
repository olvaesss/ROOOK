import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwtStrategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secretOrPrivateKey: 'jwt_secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [],
  providers: [AuthService, JwtStrategy,JwtService],
  exports:[JwtService],
})
export class AuthModule {}