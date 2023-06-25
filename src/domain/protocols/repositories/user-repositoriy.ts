import {User} from '../../entities/user';

export interface SetAuthTokenRepository {
  setAuthToken(
    params: SetAuthTokenRepository.Params,
  ): Promise<SetAuthTokenRepository.Result>;
}

export namespace SetAuthTokenRepository {
  export type Params = {
    token: string;
    user: User;
  };
  export type Result = void;
}
