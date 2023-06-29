import {GetLoggedUser} from '../../domain/usecases/auth/get-logged-user';
import {Login} from '../../domain/usecases/auth/login';
import {GetTodayTrainingSheets} from '../../domain/usecases/gym/get-today-training-sheets';
import {FakeAuthGateway} from '../../infra/gateways/auth-gateway';
import {FakeGymGateway} from '../../infra/gateways/gym-gateway';
import {AsyncStorageUserRepo} from '../../infra/repositories/user-repository/async-storage-user-repo';
import {AdaptRecoilUserState} from '../../infra/state/recoil/user-state.adapter';
import {UseCaseFactory} from './protocols/use-case.factory';

export class FakeUseCaseFactory implements UseCaseFactory {
  createLogin(): Login {
    return new Login(
      new FakeAuthGateway(),
      new AsyncStorageUserRepo(),
      AdaptRecoilUserState(),
    );
  }
  createGetLoggedUser(): GetLoggedUser {
    return new GetLoggedUser(AdaptRecoilUserState());
  }
  createGetTodayTrainingSheet(): GetTodayTrainingSheets {
    return new GetTodayTrainingSheets(new FakeGymGateway());
  }
}
