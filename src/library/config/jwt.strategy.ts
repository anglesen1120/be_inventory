import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../repository/user.repository';
import { User } from '../../entity/user.entity';
import config from '../config/config.json';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.authentication.secretOrKey,
        });
    }

    async validate(payload: JwtPayload) : Promise<User> {
        const { username } = payload;
        const user = await this.userRepository.findOne({ username });

        if(!user){
            throw new UnauthorizedException();
        }

        return user;

    }

}
