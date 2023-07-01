import 'react-native-gesture-handler';

import {RecoilRoot} from 'recoil';
import Router from './router/router';
import {FakeUseCaseFactory} from './factories/fake-use-case.factory';

export default function App() {
  return (
    <RecoilRoot>
      <Router useCaseFactory={new FakeUseCaseFactory()} />
    </RecoilRoot>
  );
}
