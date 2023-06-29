import {MockProxy, mock} from 'jest-mock-extended';
import {GetLoggedUser} from '../../../../src/domain/usecases/auth/get-logged-user';
import {UserState} from '../../../../src/domain/protocols/state/user.state';
import {correctUserTrainerAdmin} from '../../../__mocks__/user.mock';

describe('GetLoggedUser', () => {
  let sut: GetLoggedUser;
  let userState: MockProxy<UserState>;

  beforeEach(() => {
    userState = mock<UserState>();
    userState.getLoggedUser.mockReturnValue(correctUserTrainerAdmin);

    sut = new GetLoggedUser(userState);
  });

  test('should return the logged user', async () => {
    const loggedUser = sut.execute();

    expect(loggedUser).toEqual(correctUserTrainerAdmin);
  });

  test('should return null if user is not logged', async () => {
    userState.getLoggedUser.mockReturnValueOnce(null);
    const loggedUser = sut.execute();
    expect(loggedUser).toEqual(null);
  });
});
