import { ObjectType, Field, InputType, Float } from '@nestjs/graphql';
import { Period } from 'src/@generated';

@ObjectType()
export class ClaimCountTotalByCustomRangeAndPeriodQuery {
  @Field(() => String, { nullable: true })
  period: string;

  @Field(() => Float, { nullable: true })
  totalClaims: number;
}

@InputType()
export class ClaimCountTotalByCustomRangeAndPeriodArgs {
  @Field(() => Date)
  start: Date;

  @Field(() => Date)
  end: Date;

  @Field(() => Period)
  period: Period;
}
