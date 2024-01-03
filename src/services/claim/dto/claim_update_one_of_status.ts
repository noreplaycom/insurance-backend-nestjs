import { Period } from 'src/model/period.enum';
import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimStatusType, ClaimWhereInput } from 'src/@generated';

@InputType()
export class ClaimUpdateOneOfStatusArgs {
  @Field(() => String)
  id: string;
  
  @Field(() => ClaimStatusType)
  status: ClaimStatusType;
}