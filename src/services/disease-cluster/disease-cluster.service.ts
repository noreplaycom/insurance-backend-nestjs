// import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'prisma/prisma.service';
// import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
// import { Prisma } from '@prisma/client';

// @Injectable()
// export class DiseaseClusterService {
//   constructor(private prisma: PrismaService) {}

//   async createOne(diseaseClusterCreateArgs: Prisma.DiseaseClusterCreateArgs) {
//     try {
//       return await this.prisma.diseaseCluster.create(diseaseClusterCreateArgs);
//     } catch (err) {
//       throw new IGraphQLError({ code: 123456, err: err });
//     }
//   }

//   async createMany(diseaseClusterCreateManyArgs: Prisma.DiseaseClusterCreateManyArgs) {
//     try {
//       return await this.prisma.diseaseCluster.createMany(diseaseClusterCreateManyArgs);
//     } catch (err) {
//       throw new IGraphQLError({ code: 123456, err: err });
//     }
//   }

//   async findOne(diseaseClusterFindUniqueArgs: Prisma.DiseaseClusterFindUniqueArgs) {
//     try {
//       return await this.prisma.diseaseCluster.findUnique(diseaseClusterFindUniqueArgs);
//     } catch (err) {
//       throw new IGraphQLError({ code: 123456, err: err });
//     }
//   }

//   async findMany(diseaseClusterFindManyArgs: Prisma.DiseaseClusterFindManyArgs) {
//     try {
//       return await this.prisma.diseaseCluster.findMany(diseaseClusterFindManyArgs);
//     } catch (err) {
//       throw new IGraphQLError({ code: 123456, err: err });
//     }
//   }

//   async findFirst(diseaseClusterFindFirstArgs: Prisma.DiseaseClusterFindFirstArgs) {
//     try {
//       return await this.prisma.diseaseCluster.findFirst(diseaseClusterFindFirstArgs);
//     } catch (err) {
//       throw new IGraphQLError({ code: 123456, err: err });
//     }
//   }

//   async updateOne(diseaseClusterUpdateOneArgs: Prisma.DiseaseClusterUpdateArgs) {
//     try {
//       return await this.prisma.diseaseCluster.update(diseaseClusterUpdateOneArgs);
//     } catch (err) {
//       throw new IGraphQLError({ code: 123456, err: err });
//     }
//   }

//   async updateMany(diseaseClusterUpdateManyArgs: Prisma.DiseaseClusterUpdateManyArgs) {
//     try {
//       return await this.prisma.diseaseCluster.updateMany(diseaseClusterUpdateManyArgs);
//     } catch (err) {
//       throw new IGraphQLError({ code: 123456, err: err });
//     }
//   }

//   async delete(diseaseClusterDeleteArgs: Prisma.DiseaseClusterDeleteArgs) {
//     try {
//       await this.prisma.diseaseCluster.delete(diseaseClusterDeleteArgs);
//       return true;
//     } catch (err) {
//       throw new IGraphQLError({ code: 123456, err: err });
//     }
//   }

//   async deleteMany(diseaseClusterDeleteManyArgs: Prisma.DiseaseClusterDeleteManyArgs) {
//     try {
//       await this.prisma.diseaseCluster.deleteMany(diseaseClusterDeleteManyArgs);
//       return true;
//     } catch (err) {
//       throw new IGraphQLError({ code: 123456, err: err });
//     }
//   }

//   async aggregate(diseaseClusterAggregateArgs: Prisma.DiseaseClusterAggregateArgs) {
//     try {
//       return await this.prisma.diseaseCluster.aggregate(diseaseClusterAggregateArgs);
//     } catch (err) {
//       throw new IGraphQLError({ code: 123456, err: err });
//     }
//   }

//   async count(diseaseClusterCountArgs: Prisma.DiseaseClusterCountArgs) {
//     try {
//       return await this.prisma.diseaseCluster.count(diseaseClusterCountArgs);
//     } catch (err) {
//       throw new IGraphQLError({ code: 123456, err: err });
//     }
//   }
// }
