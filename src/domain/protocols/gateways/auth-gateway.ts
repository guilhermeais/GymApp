import {User} from '../../entities/user';

export interface LoginGateway {
  login(params: LoginGateway.Params): Promise<LoginGateway.Result>;
}

export namespace LoginGateway {
  export type Params = {
    email: string;
    password: string;
  };

  export type Result = {
    authToken: string;
    user: User;
  };
}

export interface ValidateUserSessionGateway {
  validateSession(
    params: ValidateUserSessionGateway.Params,
  ): Promise<ValidateUserSessionGateway.Result>;
}

export namespace ValidateUserSessionGateway {
  export type Params = {
    token: string;
  };

  export type Result = {
    isValid: boolean;
  };
}
