import {GetLoggedUser} from '../../domain/usecases/auth/get-logged-user';
import {Login} from '../../domain/usecases/auth/login';
import {GetTodayTrainingSheets} from '../../domain/usecases/training-sheet/get-today-training-sheets';
import {FakeAuthGateway} from '../../infra/gateways/auth-gateway';
import {FakeGymGateway} from '../../infra/gateways/training-sheet-gateway';
import {AsyncStorageUserRepo} from '../../infra/cache/user-cache/async-storage-user-cache';
import {AdaptRecoilUserState} from '../../infra/state/recoil/user-state.adapter';
import {UseCaseFactory} from './protocols/use-case.factory';
import {Logout, VerifyUserSession} from '../../domain/usecases/auth';
import {CreateStudent, ListStudents} from '../../domain/usecases/student';
import { FakeStudentsGateway } from '../../infra/gateways/students-gateway';
import { NetInfoNetworkGateway } from '../../infra/gateways/network-gateway/netinfo-network-gateway';

export class FakeUseCaseFactory implements UseCaseFactory {
  createCreateStudent(): CreateStudent {
    return new CreateStudent(new FakeStudentsGateway(), new NetInfoNetworkGateway(), new )
  }
  createListStudents(): ListStudents {
    throw new Error('Method not implemented.');
  }

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
