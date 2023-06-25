import {Email} from '../../entities/email';
import {Password} from '../../entities/password';
import {User} from '../../entities/user';
import {LoginGateway} from '../../protocols/gateways/auth-gateway';
import {SetAuthTokenRepository} from '../../protocols/repositories/user-repositoriy';

export class Login {
  constructor(
    private readonly authGateway: LoginGateway,
    private readonly tokenStorage: SetAuthTokenRepository,
  ) {}

  async execute(params: Login.Params): Promise<Login.Result> {
    const {authToken, user} = await this.authGateway.login({
      email: params.email.value,
      password: params.password.value,
    });

    await this.tokenStorage.setAuthToken(authToken);
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
