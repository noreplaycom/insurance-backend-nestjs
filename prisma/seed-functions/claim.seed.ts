import { AdmedicaStatus, ClaimChannel, PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient()

export async function claimCreateOne() {
  const findParticipantId = await prisma.participant.findFirst({
    skip: faker.datatype.number({ min: 1, max: 100 }),
    select: { userId: true },
  });

  if (findParticipantId) {
    console.log(
      await prisma.claim.create({
        data: {
          channel: faker.helpers.arrayElement([
            ClaimChannel.EMAIL,
            ClaimChannel.REGULER,
            ClaimChannel.WA,
          ] as const),
          admedicaStatus: faker.helpers.arrayElement([
            AdmedicaStatus.NON_ADMEDICA,
            AdmedicaStatus.ADMEDICA,
          ] as const),
          company: 'YAYASAN DANAR DANA SWADHARMA',
          participantId: findParticipantId.userId,
          cla

        },
      }),
    );
  }


}
