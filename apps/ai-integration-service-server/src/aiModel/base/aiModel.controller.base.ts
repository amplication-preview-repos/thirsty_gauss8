/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AiModelService } from "../aiModel.service";
import { AiModelCreateInput } from "./AiModelCreateInput";
import { AiModel } from "./AiModel";
import { AiModelFindManyArgs } from "./AiModelFindManyArgs";
import { AiModelWhereUniqueInput } from "./AiModelWhereUniqueInput";
import { AiModelUpdateInput } from "./AiModelUpdateInput";

export class AiModelControllerBase {
  constructor(protected readonly service: AiModelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AiModel })
  async createAiModel(
    @common.Body() data: AiModelCreateInput
  ): Promise<AiModel> {
    return await this.service.createAiModel({
      data: data,
      select: {
        apiEndpoint: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AiModel] })
  @ApiNestedQuery(AiModelFindManyArgs)
  async aiModels(@common.Req() request: Request): Promise<AiModel[]> {
    const args = plainToClass(AiModelFindManyArgs, request.query);
    return this.service.aiModels({
      ...args,
      select: {
        apiEndpoint: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AiModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async aiModel(
    @common.Param() params: AiModelWhereUniqueInput
  ): Promise<AiModel | null> {
    const result = await this.service.aiModel({
      where: params,
      select: {
        apiEndpoint: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AiModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAiModel(
    @common.Param() params: AiModelWhereUniqueInput,
    @common.Body() data: AiModelUpdateInput
  ): Promise<AiModel | null> {
    try {
      return await this.service.updateAiModel({
        where: params,
        data: data,
        select: {
          apiEndpoint: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AiModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAiModel(
    @common.Param() params: AiModelWhereUniqueInput
  ): Promise<AiModel | null> {
    try {
      return await this.service.deleteAiModel({
        where: params,
        select: {
          apiEndpoint: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
