import {Email} from '../../entities/email';
import {Password} from '../../entities/password';
import {User} from '../../entities/user';
import {LoginGateway} from '../../protocols/gateways/auth-gateway';
import {SetAuthToken} from '../../protocols/cache/user-cache';
import {UserState} from '../../protocols/state/user.state';

export class Login {
  constructor(
    private readonly authGateway: LoginGateway,
    private readonly userCache: SetAuthToken,
    private readonly userState: UserState,
  ) {}

  async execute(params: Login.Params): Promise<Login.Result> {
    const {authToken, user} = await this.authGateway.login({
      email: params.email.value,
      password: params.password.value,
    });

    await this.userCache.setAuthToken({
      token: authToken,
      user,
    });

    this.userState.setLoggedUser(user.toJSON());
    return {
      authToken,
      user,
    };
  }
}

export namespace Login {
  export type Params = {
    email: Email;
    password: Password;
  };

  export type Result = {
    authToken: string;
    user: User;
  };
}
