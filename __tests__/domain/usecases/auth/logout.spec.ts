import {MockProxy, mock} from 'jest-mock-extended';
import {Logout} from '../../../../src/domain/usecases/auth';
import {RevokeTokenGateway} from '../../../../src/domain/protocols/gateways';
import {
  GetAuthToken,
  RemoveAuthToken,
} from '../../../../src/domain/protocols/cache/user-cache';
import {UserState} from '../../../../src/domain/protocols/state/user.state';
import {correctUserTrainerAdmin} from '../../../__mocks__/user.mock';
import {faker} from '@faker-js/faker';

describe('Logout', () => {
  let sut: Logout;
  let authGateway: MockProxy<RevokeTokenGateway>;
  let userCache: MockProxy<RemoveAuthToken & GetAuthToken>;
  let userState: MockProxy<UserState>;
  const getAuthTokenResult: GetAuthToken.Result = {
    token: faker.string.uuid(),
    user: correctUserTrainerAdmin,
  };

  beforeEach(() => {
    authGateway = mock();
    userCache = mock();
    userCache.getAuthToken.mockResolvedValue(getAuthTokenResult);
    userState = mock();

    sut = new Logout(authGateway, userCache, userState);
  });

  test('should revoke the actual token', async () => {
    await sut.execute();

    expect(userCache.getAuthToken).toHaveBeenCalledTimes(1);
    expect(authGateway.revokeToken).toHaveBeenCalledTimes(1);
    expect(authGateway.revokeToken).toHaveBeenCalledWith(
      getAuthTokenResult.token,
    );
    expect(userCache.removeAuthToken).toHaveBeenCalledTimes(1);
    expect(userState.logoutUser).toHaveBeenCalledTimes(1);
  });

  test('should revoke the actual token even if the gateway throws', async () => {
    authGateway.revokeToken.mockRejectedValueOnce(new Error('some_error'));
    await sut.execute();

    expect(userCache.getAuthToken).toHaveBeenCalledTimes(1);
    expect(authGateway.revokeToken).toHaveBeenCalledTimes(1);
    expect(authGateway.revokeToken).toHaveBeenCalledWith(
      getAuthTokenResult.token,
    );
    expect(userCache.removeAuthToken).toHaveBeenCalledTimes(1);
    expect(userState.logoutUser).toHaveBeenCalledTimes(1);
  });
});
