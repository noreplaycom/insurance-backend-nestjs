import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput } from 'src/@generated';
import { Period } from 'src/model/period.enum';

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