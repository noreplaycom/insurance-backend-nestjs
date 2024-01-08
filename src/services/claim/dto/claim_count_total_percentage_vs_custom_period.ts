import { ObjectType, Field, Float, InputType } from '@nestjs/graphql';
import { Period } from 'src/@generated';

@ObjectType()
export class ClaimCountTotalPercentageVsCustomPeriodQuery {
  @Field(() => String)
  versus: string;

  @Field(() => Float)
  percentage: number;

  @Field(() => Float)
  amount: number;
}

@InputType()
export class ClaimCountTotalPercentageVsCustomPeriodArgs {
  @Field(() => Period)
  period: Period;
}
