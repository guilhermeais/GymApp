import Home from '../../../presentation/pages/Home';
import {FakeUseCaseFactory} from '../fake-use-case.factory';

export function makeHomePage() {
  return () => <Home useCaseFactory={new FakeUseCaseFactory()} />;
}
