import { Period } from 'src/model/period.enum';
import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput } from 'src/@generated';

@InputType()
export class ClaimFindOneByIdArgs {
  @Field(() => String)
  id: string;
}