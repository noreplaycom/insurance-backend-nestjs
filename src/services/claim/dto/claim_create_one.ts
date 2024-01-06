import { Field, InputType, Int } from '@nestjs/graphql';
import { AdmedicaStatus, ClaimChannel } from 'src/@generated';

@InputType()
export class ClaimFormCreateOneArgs {
  @Field(() => ClaimChannel)
  channel: ClaimChannel;
  
  @Field(() => String)
  company: string;
  
  @Field(() => AdmedicaStatus)
  admedicaStatus: AdmedicaStatus;
  
  @Field(() => String)
  participantId: string;

  @Field(() => Int)
  clinicId: number;
  
  @Field(() => Int)
  claimFinancialId: number;
  
  @Field(() => Int)
  claimProcessId: number;
  
  @Field(() => Int)
  programId: number;
}