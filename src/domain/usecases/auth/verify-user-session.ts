import {User} from '../../entities/user';
import {GetAuthToken, RemoveAuthToken} from '../../protocols/cache/user-cache';
import {ValidateUserSessionGateway} from '../../protocols/gateways';
import {UserState} from '../../protocols/state/user.state';

export class VerifyUserSession {
  constructor(
    private readonly userCache: GetAuthToken & RemoveAuthToken,
    private readonly authGateway: ValidateUserSessionGateway,
    private readonly userState: UserState,
  ) {}

  async execute() {
    const authToken = await this.userCache.getAuthToken();
    if (!authToken?.token) {
      await this.userCache.removeAuthToken();
      return {
        isValid: false,
      };
    }
    const {user, token} = authToken;
    const {isValid} = await this.authGateway.validateSession({token});

    if (!isValid) {
      await this.userCache.removeAuthToken();
      return {
        isValid: false,
      };
    }

    this.userState.setLoggedUser(user.toJSON());
    return {
      isValid,
      user,
      token,
    };
  }
}

export namespace VerifyUserSession {
  export type Request = void;
  export type Result = {
    isValid: boolean;
    token?: string;
    user?: User;
  };
}
