import { UserDTO } from '@/application/user/dtos';

import { UserDocument } from '../documents';

class UserMapper {
  static toDTO = (catchphraseData: UserDocument): UserDTO => {
    const { id, name, email, password, tokens } = catchphraseData;

    return UserDTO.build({
      id,
      name,
      email,
      password,
      tokens,
    });
  };
}

export { UserMapper };
