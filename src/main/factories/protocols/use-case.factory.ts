import {Logout, VerifyUserSession} from '../../../domain/usecases/auth';
import {GetLoggedUser} from '../../../domain/usecases/auth/get-logged-user';
import {Login} from '../../../domain/usecases/auth/login';
import {CreateStudent, ListStudents} from '../../../domain/usecases/student';
import {GetTodayTrainingSheets} from '../../../domain/usecases/training-sheet/get-today-training-sheets';

export interface UseCaseFactory {
  createLogin(): Login;
  createGetLoggedUser(): GetLoggedUser;
  createVerifyUserSession(): VerifyUserSession;

  createGetTodayTrainingSheet(): GetTodayTrainingSheets;
  createLogout(): Logout;

  createCreateStudent(): CreateStudent;
  createListStudents(): ListStudents;
}
