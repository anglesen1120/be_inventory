import { Repository, EntityRepository } from "typeorm";
import { User } from "../entity/user.entity";
import { AuthenticationDto } from "../data_tranfer_object/authentication.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';


@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async registerUser(authenticationDto: AuthenticationDto): Promise<User> {
        const { username, password } = authenticationDto;
        const user = new User();
        user.username = username;
        user.slat = await bcrypt.genSalt();;
        user.password = await this.hashPassword(password, user.slat);
        user.createby = 1;


        try {
            return await user.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException('The sever is not already...!');
            }
        }



    }

    async validateUserPassword(authentication: AuthenticationDto): Promise<string> {
        const { username, password } = authentication;
        const user = await this.findOne({ username });
        if (user && await user.validatePassword(password)) {
            return user.username

        } else {
            return null;
        }
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}