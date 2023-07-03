import {GetLoggedUser} from '../../domain/usecases/auth/get-logged-user';
import {Login} from '../../domain/usecases/auth/login';
import {GetTodayTrainingSheets} from '../../domain/usecases/training-sheet/get-today-training-sheets';
import {FakeAuthGateway} from '../../infra/gateways/auth-gateway';
import {FakeGymGateway} from '../../infra/gateways/trainin-sheet-gateway';
import {AsyncStorageUserRepo} from '../../infra/cache/user-cache/async-storage-user-cache';
import {AdaptRecoilUserState} from '../../infra/state/recoil/user-state.adapter';
import {UseCaseFactory} from './protocols/use-case.factory';
import {Logout, VerifyUserSession} from '../../domain/usecases/auth';

export class FakeUseCaseFactory implements UseCaseFactory {
  createVerifyUserSession(): VerifyUserSession {
    return new VerifyUserSession(
      new AsyncStorageUserRepo(),
      new FakeAuthGateway(),
      AdaptRecoilUserState(),
    );
  }
  createLogin(): Login {
    return new Login(
      new FakeAuthGateway(),
      new AsyncStorageUserRepo(),
      AdaptRecoilUserState(),
    );
  }
  createLogout(): Logout {
    return new Logout(
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
