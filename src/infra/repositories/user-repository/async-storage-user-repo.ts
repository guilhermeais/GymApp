import {SetAuthTokenRepository} from '../../../domain/protocols/repositories/user-repositoriy';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageUserRepo implements SetAuthTokenRepository {
  async setAuthToken(authToken: string): Promise<void> {
    await AsyncStorage.setItem('auth-token', authToken);
  }
}
