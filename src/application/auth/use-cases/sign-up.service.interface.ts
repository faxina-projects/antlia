import { SignUpDTO } from '../dtos';

interface ISignUpService {
  signUp: (signUpData: SignUpDTO) => Promise<string>;
}

export { ISignUpService };
