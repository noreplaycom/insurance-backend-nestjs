import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput, ClaimStatusType } from 'src/@generated';
import { Period } from 'src/model/period.enum';

@InputType()
export class ClaimCountQuantityWhereArgs {
  @Field(() => ClaimWhereInput)
  @Type(() => ClaimWhereInput)
  where: ClaimWhereInput;
}