import {
  IItemFinderService,
  ItemFinderService,
} from '@/application/item/use-cases';
import { HttpSuccessResponseDTO } from '@/application/shared/http/dtos';
import { IRequest, NextFunction, Response } from '@/infrastructure/app/core';
import { itemRepository } from '@/infrastructure/db/mongodb/item/repositories';

import { ItemController } from './item.controller';

class FindItemByIdController extends ItemController {
  constructor(private readonly itemFinderService: IItemFinderService) {
    super();

    this.initializeRoutes();
  }

  protected handle = async (
    request: IRequest,
    response: Response<unknown, Record<string, unknown>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const id = request.params?.id;
      const signUpData = await this.itemFinderService.findById(id);
      const responseData = new HttpSuccessResponseDTO(signUpData);

      response.status(responseData.httpStatus).send(responseData);
    } catch (error) {
      next(error);
    }
  };

  initializeRoutes = (): void => {
    this.router.get(`${this.path}/:id`, this.handle);
  };
}

const itemFinderService = new ItemFinderService(itemRepository);

const findItemByIdController = new FindItemByIdController(itemFinderService);

export { findItemByIdController };
