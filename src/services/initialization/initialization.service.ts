import { Injectable } from '@nestjs/common';
import {
  ApplicationType,
  Class,
  Color,
  Permission,
  RoleType,
} from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { populateProvinceCityDistricSubdistric } from 'prisma/seed-functions/address.seed';

// initialization.service.ts
@Injectable()
export class InitializationService {
  constructor(private readonly prisma: PrismaService) {}

  async initialize() {
    const subdistricts = await this.prisma.subdistrict.findMany();

    if (subdistricts.length <= 0) {
      await populateProvinceCityDistricSubdistric();
    }

    await this.createUserAndRoleAndProgram();
  }

  private async createUserAndRoleAndProgram() {
    try {
      // Check if roles is empty
      const roles = await this.prisma.role.findMany({});
      if (roles.length === 0) {
        console.log(
          'fresh start?.. creating superuser, admin with roles and permissions',
        );
        await this.prisma.$transaction(async (prisma) => {
          // Create participant role
          await prisma.role.create({
            data: {
              id: 0,
              name: 'Peserta',
              description: 'peserta',
              roleType: RoleType.PARTICIPANT,
            },
          });

          // Create user superuser
          await this.createSuperUser(prisma);

          // Create user admin
          await this.createAdminUser(prisma);

          // Create Exception tag
          await prisma.tag.create({
            data: { name: 'Exception', color: Color.RED, isException: true },
          });

          // Create program
          await prisma.program.createMany({
            data: [
              {
                plan: ApplicationType.BANTUAN_BIAYA_CUCI_DARAH,
                class: Class.I,
              },
              {
                plan: ApplicationType.BANTUAN_IGD_UGD,
                class: Class.I,
              },
              {
                plan: ApplicationType.BANTUAN_KURSI_RODA,
                class: Class.I,
              },
              {
                plan: ApplicationType.BANTUAN_RAWAT_INAP,
                class: Class.I,
              },
              {
                plan: ApplicationType.BANTUAN_WALKER,
                class: Class.I,
              },
              {
                plan: ApplicationType.SANTUNAN_HARIAN_RAWAT_INAP,
                class: Class.I,
              },
            ],
          });
        });

        console.log('Superuser, admin, role, program created');
      }
    } catch (error) {
      // Handle the error here
      console.error('Error creating superuser and admin:', error);

      // Optionally, you can destroy the NestJS application if there's an error.
      // Be cautious when using this, as it might have unintended consequences.
      process.exit(1);
    }
  }

  private async createAdminUser(prisma) {
    await prisma.user.create({
      data: {
        fullName: 'Admin Berkas',
        email: 'adminberkas@ydds.lab.web.id',
        password: '123456',
        role: {
          create: {
            name: 'Admin Berkas',
            description: 'admin berkas',
            roleType: RoleType.ADMIN,
            rolePermissions: {
              createMany: {
                data: [
                  { permission: Permission.CREATE_CLAIM },
                  { permission: Permission.CREATE_CLAIM_DOCUMENT },
                  { permission: Permission.CREATE_PARTICIPANT },
                  { permission: Permission.EXPORT_CLAIM },
                  { permission: Permission.EXPORT_PARTICIPANT },
                  { permission: Permission.UPDATE_CLAIM },
                  { permission: Permission.UPDATE_PARTICIPANT },
                  { permission: Permission.UPDATE_CLAIM_STATUS },
                ],
              },
            },
          },
        },
      },
    });
  }

  private async createSuperUser(prisma) {
    const permissions = Object.values(Permission);
    await prisma.user.create({
      data: {
        fullName: 'Super User',
        email: 'superuser@ydds.lab.web.id',
        password: '123456',
        role: {
          create: {
            name: 'superuser',
            description: 'superuser',
            roleType: RoleType.SUPERUSER,
            rolePermissions: {
              createMany: {
                data: permissions.map((permission) => ({ permission })),
              },
            },
          },
        },
      },
    });
  }
}
