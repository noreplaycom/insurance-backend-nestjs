import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class RoleFindOneByIdArgs {
  @Field(() => Int)
  id: number;
}