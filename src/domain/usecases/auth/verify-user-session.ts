import {User} from '../../entities/user';
import {GetAuthToken} from '../../protocols/cache/user-cache';
import {ValidateUserSessionGateway} from '../../protocols/gateways';

export class VerifyUserSession {
  constructor(
    private readonly userCache: GetAuthToken,
    private readonly authGateway: ValidateUserSessionGateway,
  ) {}

  async execute() {
    const authToken = await this.userCache.getAuthToken();
    if (!authToken?.token) {
      return {
        isValid: false,
      };
    }
    const {user, token} = authToken;
    const {isValid} = await this.authGateway.validateSession({token});

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
