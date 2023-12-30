import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput } from 'src/@generated';
import { Period } from 'src/model/period.enum';

@ObjectType()
export class ClaimQuantityAtCustomRangeQuery {
  @Field(() => String, { nullable: true })
  period: string;

  @Field(() => Float, { nullable: true })
  totalClaim: number;
}

@InputType()
export class ClaimQuantityAtCustomRangeArgs {
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

@InputType()
export class ClaimQuantityByStatusArgs {
  @Field(() => ClaimWhereInput, { nullable: true })
  @Type(() => ClaimWhereInput)
  where?: ClaimWhereInput;
}