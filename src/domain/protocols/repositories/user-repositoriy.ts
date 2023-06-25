export interface SetAuthTokenRepository {
  setAuthToken(
    params: SetAuthTokenRepository.Params,
  ): Promise<SetAuthTokenRepository.Result>;
}

export namespace SetAuthTokenRepository {
  export type Params = string;
  export type Result = void;
}
