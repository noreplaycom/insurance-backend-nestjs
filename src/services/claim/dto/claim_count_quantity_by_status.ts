import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput, ClaimStatusType } from 'src/@generated';
import { Period } from 'src/model/period.enum';

@ObjectType()
export class ClaimCountQuantityByStatusQuery {
  @Field(() => ClaimStatusType)
  status: ClaimStatusType

  @Field(() => Int)
  total: number;
}