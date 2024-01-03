import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput } from 'src/@generated';
import { Period } from 'src/model/period.enum';

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