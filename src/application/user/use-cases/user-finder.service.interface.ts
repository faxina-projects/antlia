import { UserDTO } from '../dtos';

interface IUserFinderService {
  findByUsername: (username: string) => Promise<UserDTO>;
}

export { IUserFinderService };
