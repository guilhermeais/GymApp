import {GetLoggedUser} from '../../../domain/usecases/auth/get-logged-user';
import {Login} from '../../../domain/usecases/auth/login';
import {GetTodayTrainingSheets} from '../../../domain/usecases/gym/get-today-training-sheets';

export interface UseCaseFactory {
  createLogin(): Login;
  createGetLoggedUser(): GetLoggedUser;

  createGetTodayTrainingSheet(): GetTodayTrainingSheets;
}
