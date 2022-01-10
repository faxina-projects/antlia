import {
  AccessTokenGenerator,
  ISignUpService,
  SignUpService,
} from '@/application/auth/use-cases';
import { HttpSuccessResponseDTO } from '@/application/shared/http/dtos';
import { UserCreatorService } from '@/application/user/use-cases';
import { IRequest, NextFunction, Response } from '@/infrastructure/app/core';
import { userRepository } from '@/infrastructure/db/mongodb/user/repositories';
import { bcryptHelper } from '@/infrastructure/shared/cryptor/helpers';
import { jwtHelper } from '@/infrastructure/shared/jwt/helpers';

import { BaseController } from '../base.controller';

class SignUpController extends BaseController {
  constructor(private readonly signUpService: ISignUpService) {
    super('/sign-up');

    this.initializeRoutes();
  }

  protected handle = async (
    request: IRequest,
    response: Response<unknown, Record<string, unknown>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const data = request.body;
      const signUpData = await this.signUpService.signUp(data);
      const responseData = new HttpSuccessResponseDTO(
        signUpData,
        'SignUp successfully',
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

const userCreatorService = new UserCreatorService(userRepository);
const accessTokenGenerator = new AccessTokenGenerator(jwtHelper);

const signUpService = new SignUpService(
  bcryptHelper,
  userCreatorService,
  accessTokenGenerator,
);

const signUpController = new SignUpController(signUpService);

export { signUpController };
