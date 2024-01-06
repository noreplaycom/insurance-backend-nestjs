import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ClaimFindManyByClaimIdsArgs {
  @Field(() => [String])
  ids: string[];
}