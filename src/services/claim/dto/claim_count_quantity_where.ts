import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput } from 'src/@generated';

@InputType()
export class ClaimCountQuantityWhereArgs {
  @Field(() => ClaimWhereInput)
  @Type(() => ClaimWhereInput)
  where: ClaimWhereInput;
}