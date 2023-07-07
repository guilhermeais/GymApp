import {createContext} from 'react';
import {UseCaseFactory} from '../factories/protocols/use-case.factory';
import {FakeUseCaseFactory} from '../factories/fake-use-case.factory';

export type DependenciesContextType = {
  useCaseFactory: UseCaseFactory;
};
export const DependenciesContext = createContext<DependenciesContextType>({
  useCaseFactory: new FakeUseCaseFactory(),
});
