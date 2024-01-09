import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { UserController } from 'src/services/user/user.controller';
import { Reflector } from '@nestjs/core';
import { Permission, User } from 'src/@generated';
import { PERMISSION } from 'src/decorator/permission.decorator';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly userController: UserController,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermission = this.reflector.getAllAndOverride<Permission>(
      PERMISSION,
      [context.getHandler(), context.getClass()],
    );
    const gqlCtx = GqlExecutionContext.create(context);
    const req = gqlCtx.getContext().req;
    const user = req['user'];

    const selectedUser: User = await this.userController.findOne({
      where: { id: user.userId },
      include: {
        role: {
          include: { rolePermissions: true },
        },
      },
    });

    const permissions = selectedUser.role.rolePermissions.map(
      (rolePermission) => rolePermission.permission,
    );
    const isAllowed = permissions.includes(requiredPermission);

    if (!isAllowed) {
      throw new IGraphQLError({ code: 210001 });
    }
    return true;
  }
}
