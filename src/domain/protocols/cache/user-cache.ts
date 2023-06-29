import {User} from '../../entities/user';

export interface SetAuthToken {
  setAuthToken(params: SetAuthToken.Params): Promise<SetAuthToken.Result>;
}

export namespace SetAuthToken {
  export type Params = {
    token: string;
    user: User;
  };
  export type Result = void;
}

export interface GetAuthToken {
  getAuthToken(
    _params: GetAuthToken.Params,
  ): Promise<GetAuthToken.Result | null>;
}

export namespace GetAuthToken {
  export type Params = void;
  export type Result = {
    token: string;
    user: User;
  };
}
