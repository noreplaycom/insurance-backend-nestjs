import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClaimWhereInput } from 'src/@generated';
import { Period } from 'src/model/period.enum';

@InputType()
export class NotificationUpdateOneIsReadAndIsClearedArgs {
  @Field(() => Int)
  id: number;

  @Field(() => Boolean, { nullable: true })
  isRead: boolean;

  @Field(() => Boolean, { nullable: true })
  isCleared: boolean;
}