import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserUpdateOneByIdArgs {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  fullName?: string;

  @Field(() => String, { nullable: true })
  email?: string;
  
  @Field(() => Date, { nullable: true })
  emailVerifiedAt?: Date | string;
  
  @Field(() => String, { nullable: true })
  password?: string;
  
  @Field(() => String, { nullable: true })
  profilePictureUrl?: string;
}