import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PermissionFindOneByUserIdArgs {
  @Field(() => String)
  userId: string;
}