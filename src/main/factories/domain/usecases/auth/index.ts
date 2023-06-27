import {GetLoggedUser} from '../../../../../domain/usecases/auth/get-logged-user';
import {Login} from '../../../../../domain/usecases/auth/login';
import {FakeAuthGateway} from '../../../../../infra/gateways/auth-gateway';
import {AsyncStorageUserRepo} from '../../../../../infra/repositories/user-repository/async-storage-user-repo';
import {AdaptRecoilUserState} from '../../../../../infra/state/recoil/user-state.adapter';

export function makeLoginUseCase(): Login {
  return new Login(
    new FakeAuthGateway(),
    new AsyncStorageUserRepo(),
    AdaptRecoilUserState(),
  );
}

export function makeGetLoggedUser(): GetLoggedUser {
  return new GetLoggedUser(AdaptRecoilUserState());
}
