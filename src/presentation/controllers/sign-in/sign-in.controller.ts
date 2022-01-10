import {
  AccessTokenGenerator,
  ISignInService,
  SignInService,
} from '@/application/auth/use-cases';
import { HttpSuccessResponseDTO } from '@/application/shared/http/dtos';
import { UserFinderService } from '@/application/user/use-cases';
import { IRequest, NextFunction, Response } from '@/infrastructure/app/core';
import { userRepository } from '@/infrastructure/db/mongodb/user/repositories';
import { bcryptHelper } from '@/infrastructure/shared/cryptor/helpers';
import { jwtHelper } from '@/infrastructure/shared/jwt/helpers';

import { BaseController } from '../base.controller';

class SignInController extends BaseController {
  constructor(private readonly signInService: ISignInService) {
    super('/sign-in');

    this.initializeRoutes();
  }

  protected handle = async (
    request: IRequest,
    response: Response<unknown, Record<string, unknown>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const data = request.body;
      const signInData = await this.signInService.signIn(data);
      const responseData = new HttpSuccessResponseDTO(
        signInData,
        'SignIn successfully',
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

const userFinderService = new UserFinderService(userRepository);
const accessTokenGenerator = new AccessTokenGenerator(jwtHelper);

const signInService = new SignInService(
  userFinderService,
  bcryptHelper,
  accessTokenGenerator,
);

const signInController = new SignInController(signInService);

export { signInController };
