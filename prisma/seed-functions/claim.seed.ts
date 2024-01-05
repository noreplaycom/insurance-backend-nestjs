import { AdmedicaStatus, ClaimChannel, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

let prisma = new PrismaClient();

export async function claimSeed() {
  // Fetch or create necessary related records
  const participants = await prisma.participant.findMany(); // Ensure Participants exist
  const diseases = await prisma.disease.findMany(); // Ensure Diseases exist
  const clinics = await prisma.clinic.findMany(); // Ensure Clinics exist
  const users = await prisma.user.findMany(); // Ensure Users exist
  // ... fetch or create other necessary entities like ClaimFinancial, ClaimProcess, etc.

  // Check if required entities exist
  if (
    participants.length === 0 ||
    diseases.length === 0 ||
    clinics.length === 0 ||
    users.length === 0
  ) {
    console.log('Required related models are not seeded yet.');
    return;
  }
  for (let i = 0; i < 100; i++) {
    await prisma.claim.create({
      data: {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        channel: faker.helpers.arrayElement(Object.values(ClaimChannel)),
        admedicaStatus: faker.helpers.arrayElement(
          Object.values(AdmedicaStatus),
        ),
        company: faker.company.companyName(),
        participantId: faker.helpers.arrayElement(participants).userId,
        claimFinancials: {
          create: {
            requestedAmount: faker.datatype.float({ min: 1000, max: 10000 }),
            paidAmount: faker.datatype.float({ min: 500, max: 9000 }),
            rejectedAmount: faker.datatype.float({ min: 100, max: 2000 }),
            transactionProcessDate: faker.date.past(),
            transferDate: faker.date.future(),
            branchId: branch.id,
            claimStatusId: claimStatus.id,
          },
          },
        },
        claimProcesses: {
          // Create related ClaimProcess record
        },
        diseaseId: faker.helpers.arrayElement(diseases).id,
        clinicId: faker.helpers.arrayElement(clinics).id,
        inputedById: faker.helpers.arrayElement(users).id,
        // Add more fields as required
      },
    });
  }

  console.log('Claims seeding completed.');
}
