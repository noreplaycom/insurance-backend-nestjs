import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserFindOneByIdArgs {
  @Field(() => String)
  id: string;
}