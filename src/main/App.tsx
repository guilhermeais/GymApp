import {RecoilRoot} from 'recoil';
import Router from './router/router';
import {FakeUseCaseFactory} from './factories/fake-use-case.factory';
import {DependenciesContext} from './context/DependenciesContext';
export default function App() {
  return (
    <DependenciesContext.Provider
      value={{
        useCaseFactory: new FakeUseCaseFactory(),
      }}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </DependenciesContext.Provider>
  );
}
