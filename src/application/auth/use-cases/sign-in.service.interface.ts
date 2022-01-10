import { SignInCredentialsDTO, SignInDataDTO } from '../dtos';

interface ISignInService {
  signIn: (signInData: SignInCredentialsDTO) => Promise<SignInDataDTO>;
}

export { ISignInService };
