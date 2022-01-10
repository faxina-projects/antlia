import { BaseController } from '../base.controller';

abstract class ItemController extends BaseController {
  constructor() {
    super('/items');
  }
}

export { ItemController };
