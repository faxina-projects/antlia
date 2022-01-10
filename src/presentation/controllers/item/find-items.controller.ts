import {
  IItemFinderService,
  ItemFinderService,
} from '@/application/item/use-cases';
import { HttpSuccessResponseDTO } from '@/application/shared/http/dtos';
import { IRequest, NextFunction, Response } from '@/infrastructure/app/core';
import { itemRepository } from '@/infrastructure/db/mongodb/item/repositories';

import { ItemController } from './item.controller';

class FindItemsController extends ItemController {
  constructor(private readonly itemFinderService: IItemFinderService) {
    super();

    this.initializeRoutes();
  }

  protected handle = async (
    _request: IRequest,
    response: Response<unknown, Record<string, unknown>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const signUpData = await this.itemFinderService.find();
      const responseData = new HttpSuccessResponseDTO(signUpData);

      response.status(responseData.httpStatus).send(responseData);
    } catch (error) {
      next(error);
    }
  };

  initializeRoutes = (): void => {
    this.router.get(`${this.path}`, this.handle);
  };
}

const itemFinderService = new ItemFinderService(itemRepository);

const findItemsController = new FindItemsController(itemFinderService);

export { findItemsController };
