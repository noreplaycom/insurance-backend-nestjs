import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput, ClaimStatusType } from 'src/@generated';
import { Period } from 'src/model/period.enum';

@ObjectType()
export class ClaimCountQuantityByStatusQuery {
  @Field(() => String, { nullable: true })
  period: string;

  @Field(() => [ClaimByStatus], { nullable: true })
  @Type(() => ClaimByStatus)
  claims: ClaimByStatus[];
}

@ObjectType()
export class ClaimByStatus {
  @Field(() => ClaimStatusType)
  status: ClaimStatusType

  @Field(() => Int)
  total: number;
}

@InputType()
export class ClaimCountQuantityByStatusArgs {
  @Field(() => Date)
  start: Date;

  @Field(() => Date)
  end: Date;

  @Field(() => Period)
  period: Period;

  @Field(() => ClaimWhereInput, { nullable: true })
  @Type(() => ClaimWhereInput)
  where?: ClaimWhereInput;
}