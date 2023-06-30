import {User} from '../../../domain/entities/user';
import {
  LoginGateway,
  ValidateUserSessionGateway,
  RevokeTokenGateway,
} from '../../../domain/protocols/gateways';

async function sleep(interval: number) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
}
export class FakeAuthGateway
  implements LoginGateway, ValidateUserSessionGateway, RevokeTokenGateway
{
  async revokeToken(_params: string): Promise<void> {
    await sleep(200);
  }

  async validateSession(
    _params: ValidateUserSessionGateway.Params,
  ): Promise<ValidateUserSessionGateway.Result> {
    await sleep(700);

    return {
      isValid: true,
    };
  }

  async login(_params: LoginGateway.Params): Promise<LoginGateway.Result> {
    await sleep(700);

    return {
      authToken: 'fake-auth-token',
      user: User.create({
        name: 'fake-user',
        roles: [],
        email: 'fake-user@example.com',
      }),
    };
  }
}
