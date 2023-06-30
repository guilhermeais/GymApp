import {RevokeTokenGateway} from '../../protocols/gateways/auth-gateway';
import {GetAuthToken, RemoveAuthToken} from '../../protocols/cache/user-cache';
import {UserState} from '../../protocols/state/user.state';

export class Logout {
  constructor(
    private readonly authGateway: RevokeTokenGateway,
    private readonly userCache: RemoveAuthToken & GetAuthToken,
    private readonly userState: UserState,
  ) {}

  async execute(_params: Logout.Params): Promise<Logout.Result> {
    try {
      const result = await this.userCache.getAuthToken();
      if (result) await this.authGateway.revokeToken(result.token);
    } catch (err) {
      console.error(err);
    } finally {
      await this.userCache.removeAuthToken();
      this.userState.logoutUser();
    }
  }
}

export namespace Logout {
  export type Params = void;

  export type Result = void;
}
