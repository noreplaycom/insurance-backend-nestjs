import { Field, InputType } from '@nestjs/graphql';
import { ClaimStatusType } from 'src/@generated';

@InputType()
export class ClaimUpdateOneOfStatusArgs {
  @Field(() => String)
  id: string;
  
  @Field(() => ClaimStatusType)
  status: ClaimStatusType;
}