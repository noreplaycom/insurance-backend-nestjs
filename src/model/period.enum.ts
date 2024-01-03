import { registerEnumType } from '@nestjs/graphql';

export enum Period {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
  ALLTIME = 'alltime',
}

registerEnumType(Period, {
  name: 'Period',
  description: 'Period options for data retrieval',
});
