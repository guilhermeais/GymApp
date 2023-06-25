import {User} from '../../../domain/entities/user';
import {LoginGateway} from '../../../domain/protocols/gateways';

export class FakeAuthGateway implements LoginGateway {
  async login(_params: LoginGateway.Params): Promise<LoginGateway.Result> {
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
