import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput } from 'src/@generated';
import { Period } from 'src/model/period.enum';

@InputType()
export class PermissionFindOneByUserIdArgs {
  @Field(() => String)
  userId: string;
}