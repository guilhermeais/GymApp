import Home from '../../../presentation/pages/Home';
import {makeGetLoggedUser} from '../domain/usecases/auth';

export function makeHomePage() {
  return () => <Home getLoggedUser={makeGetLoggedUser()} />;
}
