import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { writeFile } from 'fs/promises';
import { read, utils } from 'xlsx';

@Resolver()
export class UploaderResolver {
  @Mutation(() => String, {
    nullable: true,
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error. File JPG akan dicompress',
  })
  async uploadSingleFile(
    @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
    file: FileUpload,
    // @Args('userId', { type: () => String, nullable: false }) userId: string,
    // @Args('ratioForImage', { type: () => RatioEnum, nullable: true }) ratioForImage?: RatioEnum,
  ) {
    //validate user id
    // await this.validateUserId(userId);

    // return await this.uploaderService.uploadSingleFile({
    //   userId: userId,
    //   ratioForImage: ratioForImage ?? RatioEnum.SQUARE,
    //   file: file,
    // });
    const { createReadStream } = file;
    const stream = createReadStream();
    const chunks = [];
    await new Promise<Buffer>((resolve, reject) => {
      let buffer: Buffer;
      stream.on('data', function (chunk: any) {
        chunks.push(chunk);
      });
      stream.on('end', function () {
        buffer = Buffer.concat(chunks);
        resolve(buffer);
      });
      stream.on('error', reject);
    });
    const result = Buffer.concat(chunks);
    const workbook = (read(result))
    console.log(workbook.SheetNames)
    const sheet = workbook.Sheets['Sheet 1']
    console.log(utils.sheet_to_json(sheet))
    return 'success'
  }
}