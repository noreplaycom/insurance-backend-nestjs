import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput } from 'src/@generated';

@InputType()
export class RoleFindOneByUserArgs {
  @Field(() => String)
  userId: string;
}
