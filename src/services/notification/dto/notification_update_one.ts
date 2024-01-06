import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class NotificationUpdateOneIsReadAndIsClearedArgs {
  @Field(() => Int)
  id: number;

  @Field(() => Boolean, { nullable: true })
  isRead: boolean;

  @Field(() => Boolean, { nullable: true })
  isCleared: boolean;
}