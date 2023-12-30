import { ObjectType, Field, Int, InputType, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput } from 'src/@generated';
import { Period } from 'src/model/period.enum';

@ObjectType()
export class ClaimCountTotalByCustomRangeAndPeriodQuery {
  @Field(() => String, { nullable: true })
  period: string;

  @Field(() => Float, { nullable: true })
  amount: number;
}

@InputType()
export class ClaimCountTotalByCustomRangeAndPeriodArgs {
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