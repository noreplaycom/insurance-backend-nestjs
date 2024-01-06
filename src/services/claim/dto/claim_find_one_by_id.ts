import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ClaimFindOneByIdArgs {
  @Field(() => String)
  id: string;
}