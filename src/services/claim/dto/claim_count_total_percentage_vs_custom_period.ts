import { ObjectType, Field, Float, InputType } from '@nestjs/graphql';
import { Period } from 'src/model/period.enum';

@ObjectType()
export class ClaimCountTotalPercentageVsCustomPeriodQuery {
  @Field(() => Period)
  period: Period;

  @Field(() => Float)
  percentage: number;
}

@InputType()
export class ClaimCountTotalPercentageVsCustomPeriodArgs {
  @Field(() => Period)
  period: Period;
}