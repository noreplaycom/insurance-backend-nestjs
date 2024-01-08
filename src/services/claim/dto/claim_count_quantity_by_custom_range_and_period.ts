import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { Period } from 'src/@generated';

@ObjectType()
export class ClaimCountQuantityByCustomRangeAndPeriodQuery {
  @Field(() => String, { nullable: true })
  period: string;

  @Field(() => Int, { nullable: true })
  quantityClaims: number;
}

@InputType()
export class ClaimCountQuantityByCustomRangeAndPeriodArgs {
  @Field(() => Date)
  start: Date;

  @Field(() => Date)
  end: Date;

  @Field(() => Period)
  period: Period;
}
