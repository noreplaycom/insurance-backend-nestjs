import { AdmedicaStatus, ClaimChannel, Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function claimCreateOne() {

  const query: Prisma.ClaimCreateArgs = {data: {company: }}

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
        company: { conn: { id: 1 } },
      },
    }),
  );
}
