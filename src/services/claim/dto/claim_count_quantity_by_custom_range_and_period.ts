import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput } from 'src/@generated';
import { Period } from 'src/model/period.enum';

@ObjectType()
export class ClaimCountQuantityByCustomRangeAndPeriodQuery {
  @Field(() => String, { nullable: true })
  period: string;

  @Field(() => Float, { nullable: true })
  totalClaim: number;
}

@InputType()
export class ClaimCountQuantityByCustomRangeAndPeriodArgs {
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