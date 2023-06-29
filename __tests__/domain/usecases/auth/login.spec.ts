import {LoginGateway} from '../../../../src/domain/protocols/gateways/auth-gateway';
import {SetAuthToken} from '../../../../src/domain/protocols/cache/user-cache';
import {Login} from '../../../../src/domain/usecases/auth/login';
import {MockProxy, mock} from 'jest-mock-extended';
import {faker} from '@faker-js/faker';
import {correctUserTrainerAdmin} from '../../../__mocks__/user.mock';
import {Email} from '../../../../src/domain/entities/email';
import {Password} from '../../../../src/domain/entities/password';
import {UserState} from '../../../../src/domain/protocols/state/user.state';

describe('Login', () => {
  let sut: Login;
  let authGateway: MockProxy<LoginGateway>;
  let tokenStorage: MockProxy<SetAuthToken>;
  let userState: MockProxy<UserState>;
  let authToken: string;

  beforeEach(() => {
    authToken = faker.string.uuid();
    authGateway = mock<LoginGateway>({
      login: jest.fn().mockResolvedValue({
        authToken,
        user: correctUserTrainerAdmin,
      }),
    });
    tokenStorage = mock<SetAuthToken>();
    userState = mock<UserState>();

    sut = new Login(authGateway, tokenStorage, userState);
  });

  test('should return the user and accessToken on success', async () => {
    const params: Login.Params = {
      email: new Email(faker.internet.email()),
      password: new Password(faker.internet.password()),
    };
    const result = await sut.execute(params);

    expect(authGateway.login).toBeCalledTimes(1);
    expect(authGateway.login).toBeCalledWith({
      email: params.email.value,
      password: params.password.value,
    });

    expect(tokenStorage.setAuthToken).toHaveBeenCalledWith({
      token: authToken,
      user: correctUserTrainerAdmin,
    });
    expect(userState.setLoggedUser).toHaveBeenCalledWith(
      correctUserTrainerAdmin.toJSON(),
    );

    expect(result.user).toEqual(correctUserTrainerAdmin);
    expect(result.authToken).toEqual(authToken);
  });
});
