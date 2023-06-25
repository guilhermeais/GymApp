import {SetAuthTokenRepository} from '../../../domain/protocols/repositories/user-repositoriy';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageUserRepo implements SetAuthTokenRepository {
  async setAuthToken(params: SetAuthTokenRepository.Params): Promise<void> {
    await AsyncStorage.setItem(
      'logged-user',
      JSON.stringify({
        authToken: params.token,
        user: JSON.stringify(params.user.toJSON()),
      }),
    );
  }
}
