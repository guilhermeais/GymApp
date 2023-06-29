import {MockProxy, mock} from 'jest-mock-extended';
import {GetAuthToken} from '../../../../src/domain/protocols/cache/user-cache';
import {ValidateUserSessionGateway} from '../../../../src/domain/protocols/gateways';
import {VerifyUserSession} from '../../../../src/domain/usecases/auth';
import {faker} from '@faker-js/faker';
import {correctUserTrainerAdmin} from '../../../__mocks__/user.mock';

describe('VerifyUserSession', () => {
  let sut: VerifyUserSession;
  let userCache: MockProxy<GetAuthToken>;
  let authGateway: MockProxy<ValidateUserSessionGateway>;
  const userCacheResponse: GetAuthToken.Result = {
    token: faker.string.uuid(),
    user: correctUserTrainerAdmin,
  };

  beforeEach(() => {
    userCache = mock();
    userCache.getAuthToken.mockResolvedValue(userCacheResponse);
    authGateway = mock();
    authGateway.validateSession.mockResolvedValue({
      isValid: true,
    });

    sut = new VerifyUserSession(userCache, authGateway);
  });

  test('should verify the user session when user has a token on storage', async () => {
    const result = await sut.execute();

    expect(result.isValid).toEqual(true);
    expect(result.token).toEqual(userCacheResponse.token);
    expect(result.user).toEqual(userCacheResponse.user);
  });

  test('should verify the user session when user does not have a token on storage', async () => {
    userCache.getAuthToken.mockResolvedValue(null);

    const result = await sut.execute();

    expect(result.isValid).toEqual(false);
  });

  test('should verify the user session when user  have a expired/invalid token on storage', async () => {
    authGateway.validateSession.mockResolvedValue({
      isValid: false,
    });

    const result = await sut.execute();

    expect(result.isValid).toEqual(false);
  });
});
