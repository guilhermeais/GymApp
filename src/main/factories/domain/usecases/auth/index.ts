import {Login} from '../../../../../domain/usecases/auth/login';
import {FakeAuthGateway} from '../../../../../infra/gateways/auth-gateway';
import {AsyncStorageUserRepo} from '../../../../../infra/repositories/user-repository/async-storage-user-repo';

export function makeLoginUseCase(): Login {
  return new Login(new FakeAuthGateway(), new AsyncStorageUserRepo());
}
