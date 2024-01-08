import { Injectable } from '@nestjs/common';
import {
  Period,
  Prisma,
  ProgramType,
  SantunanHarianRawatInapPlan,
  TambahanBantuanRawatInapType,
} from '@prisma/client';
import { ProgramService } from './program.service';

@Injectable()
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  async createOne(programCreateArgs: Prisma.ProgramCreateArgs) {
    return await this.programService.createOne(programCreateArgs);
  }

  async createMany(programCreateManyArgs: Prisma.ProgramCreateManyArgs) {
    return await this.programService.createMany(programCreateManyArgs);
  }

  async findOne(programFindUniqueArgs: Prisma.ProgramFindUniqueArgs) {
    return await this.programService.findOne(programFindUniqueArgs);
  }

  async findMany(programFindManyArgs: Prisma.ProgramFindManyArgs) {
    return await this.programService.findMany(programFindManyArgs);
  }

  async findFirst(programFindFirstArgs: Prisma.ProgramFindFirstArgs) {
    return await this.programService.findFirst(programFindFirstArgs);
  }

  async updateOne(programUpdateOneArgs: Prisma.ProgramUpdateArgs) {
    return await this.programService.updateOne(programUpdateOneArgs);
  }

  async updateMany(programUpdateManyArgs: Prisma.ProgramUpdateManyArgs) {
    return await this.programService.updateMany(programUpdateManyArgs);
  }

  async delete(programDeleteArgs: Prisma.ProgramDeleteArgs) {
    return await this.programService.delete(programDeleteArgs);
  }

  async deleteMany(programDeleteManyArgs: Prisma.ProgramDeleteManyArgs) {
    return await this.programService.deleteMany(programDeleteManyArgs);
  }

  async aggregate(programAggregateArgs: Prisma.ProgramAggregateArgs) {
    return await this.programService.aggregate(programAggregateArgs);
  }

  async count(programCountArgs: Prisma.ProgramCountArgs) {
    return await this.programService.count(programCountArgs);
  }

  async createManyProgram() {
    await this.createMany({
      data: [
        /*
        Maksimal santunan 60 hari rawat inap/tahun/orang
        Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
        Plan I (VP keatas)= Rp.1.250.000, Plan II (MGR -SAVP) = Rp.1.000.000, Plan III (PD - SAMGR) = Rp.750.000
        Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
        */
        {
          type: ProgramType.SANTUNAN_HARIAN_RAWAT_INAP,
          santunanHarianRawatInapPlan: SantunanHarianRawatInapPlan.I,
          allowanceCeiling: 1250000,
          allowanceCeilingPeriod: Period.DAILY,
          allowanceQuota: 60,
          allowanceQuotaPeriod: Period.WEEKLY,
          claimPeriodMax: 60,
          reclaimPeriodMax: 60,
        },
        /*
        Maksimal santunan 60 hari rawat inap/tahun/orang
        Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
        Plan I (VP keatas)= Rp.1.250.000, Plan II (MGR -SAVP) = Rp.1.000.000, Plan III (PD - SAMGR) = Rp.750.000
        Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
        */
        {
          type: ProgramType.SANTUNAN_HARIAN_RAWAT_INAP,
          santunanHarianRawatInapPlan: SantunanHarianRawatInapPlan.II,
          allowanceCeiling: 1000000,
          allowanceCeilingPeriod: Period.DAILY,
          allowanceQuota: 60,
          allowanceQuotaPeriod: Period.YEARLY,
          claimPeriodMax: 60,
          reclaimPeriodMax: 60,
        },
        /*
        /*
        Maksimal santunan 60 hari rawat inap/tahun/orang
        Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
        Plan I (VP keatas)= Rp.1.250.000, Plan II (MGR -SAVP) = Rp.1.000.000, Plan III (PD - SAMGR) = Rp.750.000
        Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
        */
        {
          type: ProgramType.SANTUNAN_HARIAN_RAWAT_INAP,
          santunanHarianRawatInapPlan: SantunanHarianRawatInapPlan.III,
          allowanceCeiling: 750000,
          allowanceCeilingPeriod: Period.DAILY,
          allowanceQuota: 60,
          allowanceQuotaPeriod: Period.YEARLY,
          claimPeriodMax: 60,
          reclaimPeriodMax: 60,
        },
        /*
        Plafon per orang perminggu maksimal 2 kali kunjungan, per kunjunan maksimal Rp.700.000
        Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
        Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
        */
        {
          type: ProgramType.BANTUAN_BIAYA_CUCI_DARAH,
          allowanceCeiling: 700000, //per invoice by default
          allowanceCeilingPeriod: Period.EVENT,
          allowanceQuota: 2,
          allowanceQuotaPeriod: Period.WEEKLY,
          claimPeriodMax: 60,
          reclaimPeriodMax: 60,
        },
        /*
        Plafon per orang maksimal Rp. 2.000.000 eenmaleg (hanya 1 kali)
        Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
        Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
        */
        {
          type: ProgramType.BANTUAN_KURSI_RODA,
          allowanceCeiling: 2000000,
          allowanceCeilingPeriod: Period.ALLTIME,
          claimPeriodMax: 60,
          reclaimPeriodMax: 60,
        },
        /*
      Plafon per orang maksimal Rp. 350.000 / 2 tahun
      Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
      Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
        */
        {
          type: ProgramType.BANTUAN_WALKER,
          allowanceCeiling: 350000,
          allowanceCeilingPeriod: Period.BIENNIALLY,
          claimPeriodMax: 60,
          reclaimPeriodMax: 60,
        },
        /*
      50% dari biaya UGD/IGD, Plafon per pasangan maksimal Rp. 1.500.000 /tahun
      Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
      Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
        */
        {
          type: ProgramType.BANTUAN_IGD_UGD,
          maxAllowancePercentage: 50,
          allowanceCeiling: 1500000,
          allowanceCeilingPeriod: Period.YEARLY,
          claimPeriodMax: 60,
          reclaimPeriodMax: 60,
        },
        /*
  RI BPJS Kesehatan
  1 Biaya RS a/b pensiunan setelah dikurangi santunan OCP dibantu 50%, Plafon maksimal Rp. 40.000.000 /tahun/pasangan
  2 Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
  3 Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
  RI Non BPJS Kesehatan
  1 Biaya RS a/b pensiunan setelah dikurangi santunan OCP dibantu 50%, Plafon maksimal Rp. 10.000.000 /tahun/pasangan
  2 Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
  3 Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
        */
        {
          type: ProgramType.BANTUAN_RAWAT_INAP,
          tambahanBantuanRawatInapType: TambahanBantuanRawatInapType.BPJS,
          maxAllowancePercentage: 50,
          allowanceCeiling: 40000000,
          allowanceCeilingPeriod: Period.YEARLY,
          claimPeriodMax: 60,
          reclaimPeriodMax: 60,
        },
        /*
  RI BPJS Kesehatan
  1 Biaya RS a/b pensiunan setelah dikurangi santunan OCP dibantu 50%, Plafon maksimal Rp. 40.000.000 /tahun/pasangan
  2 Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
  3 Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
  RI Non BPJS Kesehatan
  1 Biaya RS a/b pensiunan setelah dikurangi santunan OCP dibantu 50%, Plafon maksimal Rp. 10.000.000 /tahun/pasangan
  2 Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
  3 Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
        */
        {
          type: ProgramType.BANTUAN_RAWAT_INAP,
          tambahanBantuanRawatInapType: TambahanBantuanRawatInapType.NON_BPJS,
          maxAllowancePercentage: 50,
          allowanceCeiling: 10000000,
          allowanceCeilingPeriod: Period.YEARLY,
          claimPeriodMax: 60,
          reclaimPeriodMax: 60,
        },
      ],
    });
  }
}
