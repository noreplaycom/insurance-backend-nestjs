import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserDeleteOneByIdArgs {
  @Field(() => String)
  id: string;
}