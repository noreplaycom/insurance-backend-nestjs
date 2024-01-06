import { Field, InputType, Int } from '@nestjs/graphql';
@InputType()
export class UserCreateOneAsParticipantArgs {
  @Field(() => String)
  fullName: string;

  @Field(() => String)
  email: string;
  
  @Field(() => Date, { nullable: true })
  emailVerifiedAt?: Date | string;
  
  @Field(() => String)
  password: string;
  
  @Field(() => String, { nullable: true })
  profilePictureUrl?: string;
  
  @Field(() => String)
  participantId: string;
  
  @Field(() => Int)
  roleId: number;
}