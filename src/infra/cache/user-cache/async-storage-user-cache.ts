import {SetAuthToken} from '../../../domain/protocols/cache/user-cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageUserRepo implements SetAuthToken {
  async setAuthToken(params: SetAuthToken.Params): Promise<void> {
    await AsyncStorage.setItem(
      'logged-user',
      JSON.stringify({
        authToken: params.token,
        user: JSON.stringify(params.user.toJSON()),
      }),
    );
  }
}
