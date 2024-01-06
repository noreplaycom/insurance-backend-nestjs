import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ClaimStatusType } from 'src/@generated';

@ObjectType()
export class ClaimCountQuantityByStatusQuery {
  @Field(() => ClaimStatusType)
  status: ClaimStatusType

  @Field(() => Int)
  total: number;
}