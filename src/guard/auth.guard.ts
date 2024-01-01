import { CanActivate, ExecutionContext, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  
  private extractToken(req: Request): string {
    const token = req.headers['authorization'];

    if (!token) {
      throw new GraphQLError('no token provided', {
        extensions: {
          code: 'JWT_ERROR'
        }
      });
    }

    const [bearerHead, tokenBody] = token.split(' ');

    return bearerHead ? tokenBody : undefined;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlCtx = GqlExecutionContext.create(context);
    const req = gqlCtx.getContext().req;
    const token = this.extractToken(req);

    if (!token) {
      throw new GraphQLError('malformed_token', {
        extensions: {
          code: 'JWT_ERROR'
        }
      });
    }
    
    try {
      const verifiedToken = await this.jwtService.verifyAsync<{ id: number }>(token);

      req['user'] = {
        id: verifiedToken.id,
      }

      return true;
    } catch (error) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: error.extensions.code
        }
      });
    }
  }
}