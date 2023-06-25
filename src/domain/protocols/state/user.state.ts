import {User, UserProps} from '../../entities/user';

export interface UserState {
  setLoggedUser(user: UserProps): void;
  getLoggedUser(): User;
}
