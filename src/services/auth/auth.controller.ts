import { Injectable } from '@nestjs/common';
import { UserController } from '../user/user.controller';
import { LoginArgs } from './dto/login.args';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import * as bcrypt from 'bcrypt';
import { LoginResponse } from './model/login-response.model';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/@generated';

@Injectable()
export class AuthController {
  constructor(
    private readonly userController: UserController,
    private readonly jwtService: JwtService,
  ) {}

  async validate({ email, password }: LoginArgs): Promise<any> {
    //find user by email
    const user = await this.userController.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      //if found, compare password
      const passwordValid = await bcrypt.compare(password, user.password);

      if (passwordValid) {
        return user;
      } else {
        throw new IGraphQLError({ code: 10005 });
      }
    } else {
      //if user not found
      throw new IGraphQLError({ code: 10004 });
    }
  }

  async login(user: User): Promise<LoginResponse> {
    //check is user deleted
    if (user && user.deletedAt) {
      throw new IGraphQLError({ code: 10007 });
    }
    console.log('masuk login');
    return {
      accessToken: this.jwtService.sign({
        id: user.id,
        email: user.email,
        permissions: user.role.rolePermissions,
      }),
      user,
    };
  }

  // async resetPassword(email: string) {
  //   return await this.authService.resetPassword(email).then((res) => {
  //     //TODO: send email
  //     return res;
  //   });
  // }
}
