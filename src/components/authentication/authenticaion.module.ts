import { Module } from '@nestjs/common';
import { AuthenticaionController } from './authenticaion.controller';
import { AuthenticaionService } from '../../services/authenticaion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../../repository/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../../library/config/jwt.strategy';
import config from '../../library/config/config.json';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    JwtModule.register({
      secret: config.authentication.secretOrKey,
      signOptions: {
        expiresIn: config.authentication.expiresIn,
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AuthenticaionController],
  providers: [AuthenticaionService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthenticaionModule {}
