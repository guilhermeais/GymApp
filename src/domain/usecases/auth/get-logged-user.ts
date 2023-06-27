import {User} from '../../entities/user';
import {UserState} from '../../protocols/state/user.state';

export class GetLoggedUser {
  constructor(private readonly userState: UserState) {}
  execute() {
    const user = this.userState.getLoggedUser();

    return user;
  }
}

export namespace GetLoggedUser {
  export type Params = null;

  export type Result = User | null;
}
