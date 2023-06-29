import SignIn from '../../../presentation/pages/SignIn';
import {FakeUseCaseFactory} from '../fake-use-case.factory';

export function makeSignInPage() {
  return () => <SignIn useCaseFactory={new FakeUseCaseFactory()} />;
}
