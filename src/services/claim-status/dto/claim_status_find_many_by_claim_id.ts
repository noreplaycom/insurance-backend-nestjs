import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ClaimStatusFindManyByClaimIdArgs {
  @Field(() => String)
  claimId: string;
}