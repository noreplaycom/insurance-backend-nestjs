// import { Mutation, Resolver } from '@nestjs/graphql';
// import { GraphQLUpload } from 'graphql-upload';

// @Resolver()
// export class UploaderResolver {
//   @Mutation(() => String, {
//     nullable: true,
//     description:
//       'Header wajib ada apollo-require-preflight = true agar tidak CSRF error. File JPG akan dicompress',
//   })
//   async uploadSingleFile(
//     @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
//     file: FileUpload,
//     @Args('userId', { type: () => String, nullable: false }) userId: string,
//     @Args('ratioForImage', { type: () => RatioEnum, nullable: true })
//     ratioForImage?: RatioEnum,
//   ) {
//     //validate user id
//     await this.validateUserId(userId);

//     return await this.uploaderService.uploadSingleFile({
//       userId: userId,
//       ratioForImage: ratioForImage ?? RatioEnum.SQUARE,
//       file: file,
//     });
//   }
// }