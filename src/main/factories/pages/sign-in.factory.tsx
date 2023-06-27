import SignIn from '../../../presentation/pages/SignIn';
import {makeLoginUseCase} from '../domain/usecases/auth';

export function makeSignInPage() {
  return () => <SignIn login={makeLoginUseCase()} />;
}
