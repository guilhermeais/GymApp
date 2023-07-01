/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {FakeUseCaseFactory} from '../factories/fake-use-case.factory';
import {SplashScreen} from '../../presentation/components/SplashScreen';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

type Props = {
  useCaseFactory: FakeUseCaseFactory;
};
export default function Router({useCaseFactory}: Props) {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const verifyUserSession = useCaseFactory.createVerifyUserSession();
  const getLoggedUser = useCaseFactory.createGetLoggedUser();
  const loggedUser = getLoggedUser.execute();

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true);
      try {
        if (loggedUser && isLogged) {
          setIsLogged(true);
          setIsLoading(false);
          return;
        }

        const {isValid} = await verifyUserSession.execute();
        setIsLogged(isValid);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  }, [loggedUser]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {isLogged ? <AppStack useCaseFactory={useCaseFactory} /> : <AuthStack />}
    </NavigationContainer>
  );
}
