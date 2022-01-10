import {
  IItemCreatorService,
  ItemCreatorService,
} from '@/application/item/use-cases';
import { HttpCreatedResponseDTO } from '@/application/shared/http/dtos';
import { IRequest, NextFunction, Response } from '@/infrastructure/app/core';
import { itemRepository } from '@/infrastructure/db/mongodb/item/repositories';

import { ItemController } from './item.controller';

class CreateItemController extends ItemController {
  constructor(private readonly itemCreatorService: IItemCreatorService) {
    super();

    this.initializeRoutes();
  }

  protected handle = async (
    request: IRequest,
    response: Response<unknown, Record<string, unknown>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const data = request.body;
      const signUpData = await this.itemCreatorService.create(data);
      const responseData = new HttpCreatedResponseDTO(
        'Item created successfully',
        signUpData,
      );

      response.status(responseData.httpStatus).send(responseData);
    } catch (error) {
      next(error);
    }
  };

  initializeRoutes = (): void => {
    this.router.post(`${this.path}`, this.handle);
  };
}

const itemCreatorService = new ItemCreatorService(itemRepository);

const createItemController = new CreateItemController(itemCreatorService);

export { createItemController };
