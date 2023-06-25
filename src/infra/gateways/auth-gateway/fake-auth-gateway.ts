import {User} from '../../../domain/entities/user';
import {LoginGateway} from '../../../domain/protocols/gateways';

async function sleep(interval: number) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
}
export class FakeAuthGateway implements LoginGateway {
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
