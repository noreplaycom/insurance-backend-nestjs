import { ObjectType, Field, Float, InputType, Int } from '@nestjs/graphql';
import { AdmedicaStatus, ClaimChannel } from 'src/@generated';
import { Period } from 'src/model/period.enum';

@InputType()
export class ClaimFormCreateOneArgs {
  @Field(() => ClaimChannel)
  channel: ClaimChannel;
  
  @Field(() => AdmedicaStatus)
  admedicaStatus: AdmedicaStatus;
  
  @Field(() => Int)
  companyId: number;
  
  @Field(() => String)
  participantId: string;
  
  @Field(() => [Int])
  claimFinancialsId: number[];
  
  @Field(() => [Int])
  claimProcessesId: number[];
  
  @Field(() => Int, { nullable: true })
  diseaseId?: number;
  
  @Field(() => [Int])
  clinicsId: number[];
  
  @Field(() => Int, { nullable: true })
  inputedBy?: string;
  
  @Field(() => [Int])
  claimTypes: number[];
  
  @Field(() => [Int], { nullable: true })
  tags?: number[];
  
  @Field(() => [Int], { nullable: true })
  claimStatuses?: number[];
}