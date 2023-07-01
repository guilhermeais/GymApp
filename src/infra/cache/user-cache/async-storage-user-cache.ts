import {User, UserProps} from '../../../domain/entities/user';
import {
  GetAuthToken,
  RemoveAuthToken,
  SetAuthToken,
} from '../../../domain/protocols/cache/user-cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageUserRepo
  implements SetAuthToken, GetAuthToken, RemoveAuthToken
{
  async removeAuthToken(_params: void): Promise<void> {
    await AsyncStorage.removeItem('logged-user');
  }

  async getAuthToken(_params: void): Promise<GetAuthToken.Result> {
    const loggedUserItem = await AsyncStorage.getItem('logged-user');

    if (loggedUserItem) {
      const userJSON = JSON.parse(loggedUserItem) as {
        authToken: string;
        user: UserProps;
      };

      return {
        token: userJSON.authToken,
        user: User.create(userJSON.user),
      };
    }

    return null;
  }

  async setAuthToken(params: SetAuthToken.Params): Promise<void> {
    await AsyncStorage.setItem(
      'logged-user',
      JSON.stringify({
        authToken: params.token,
        user: params.user.toJSON(),
      }),
    );
  }
}
