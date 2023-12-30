// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Position, Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  Claim, FindManyClaimArgs, Region, ParticipantStatus
} from 'src/@generated';
import { LoginController } from './claim-management.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import { ClaimController } from '../claim/claim.controller';
import { ClaimQuantityAtCustomRangeArgs, ClaimQuantityAtCustomRangeQuery, ClaimQuantityByStatusArgs } from './claim-management.dto';
import { Period } from 'src/model/enums';
import { dataFakeClaim, dataFakeRegion } from './region.fake';
import { dataFakePosition } from './position.fake';
import { PositionAvailable } from './position.dto';

@Resolver(() => Claim)
export class ClaimManagementResolver {
  constructor(private readonly claimController: ClaimController) {}

  @Query(() => [Region], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async regionFindMany(
  ) {
    return dataFakeRegion;
  }
  
  @Query(() => [String], {
    description: 'Deskripsinya ada disini loh',
  })
  async positionFindMany() {
    return Object.values(Position);
  }


  @Query(() => [String], {
    description: 'Deskripsinya ada disini loh',
  })
  async participantStatusFindMany() {
    return Object.values(ParticipantStatus)
  }
}
