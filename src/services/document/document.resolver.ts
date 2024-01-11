// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateDocument,
  CreateManyDocumentArgs,
  CreateOneDocumentArgs,
  DeleteManyDocumentArgs,
  DeleteOneDocumentArgs,
  FindFirstDocumentArgs,
  FindManyDocumentArgs,
  FindUniqueDocumentArgs,
  Document,
  DocumentAggregateArgs,
  UpdateManyDocumentArgs,
  UpdateOneDocumentArgs,
} from 'src/@generated';
import { DocumentController } from './document.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface DocumentSelect {
  select: Prisma.DocumentSelect;
}

@Resolver(() => Document)
export class DocumentResolver {
  constructor(private readonly documentController: DocumentController) {}

  @Mutation(() => Document, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async documentCreateOne(
    @Args()
    documentCreateArgs: CreateOneDocumentArgs,
    @Relations() relations: DocumentSelect,
  ): Promise<Document | void> {
    return await this.documentController.createOne({
      ...documentCreateArgs,
      select: relations.select,
    });
  }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async documentCreateMany(
  //   @Args()
  //   createManyDocumentArgs: CreateManyDocumentArgs,
  // ) {
  //   return await this.documentController.createMany(createManyDocumentArgs);
  // }

  // @Query(() => Document, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // documentFindOne(
  //   @Args()
  //   documentFindUniqueArgs: FindUniqueDocumentArgs,
  //   @Relations() relations: DocumentSelect,
  // ): Promise<Document | void> {
  //   return this.documentController.findOne({
  //     ...documentFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => [Document], {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // documentFindMany(
  //   @Args() documentFindManyArgs: FindManyDocumentArgs,
  //   @Relations() relations: DocumentSelect,
  // ) {
  //   return this.documentController.findMany({
  //     ...documentFindManyArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => Document, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // documentFindFirst(
  //   @Args()
  //   findFirstDocumentArgs: FindFirstDocumentArgs,
  //   @Relations() relations: DocumentSelect,
  // ): Promise<Document | void> {
  //   return this.documentController.findFirst({
  //     ...findFirstDocumentArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Document, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async documentUpdateOne(
  //   @Args() documentUpdateOneArgs: UpdateOneDocumentArgs,
  //   @Relations() relations: DocumentSelect,
  // ) {
  //   return this.documentController.updateOne({
  //     ...replaceNullWithUndefined(documentUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Document, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async documentUpdateMany(@Args() updateManyDocumentArgs: UpdateManyDocumentArgs) {
  //   return this.documentController.updateMany(updateManyDocumentArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async documentDelete(
  //   @Args() deleteOneDocumentArgs: DeleteOneDocumentArgs,
  //   @Relations() relations: DocumentSelect,
  // ) {
  //   return this.documentController.delete({
  //     ...deleteOneDocumentArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async documentDeleteMany(@Args() deleteManyDocumentArgs: DeleteManyDocumentArgs) {
  //   return this.documentController.deleteMany(deleteManyDocumentArgs);
  // }

  // @Query(() => AggregateDocument, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // documentAggregate(@Args() documentAggregateArgs: DocumentAggregateArgs) {
  //   return this.documentController.aggregate(documentAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // documentCount(@Args() documentCountAggregateInput: FindManyDocumentArgs) {
  //   return this.documentController.count(documentCountAggregateInput);
  // }
}
