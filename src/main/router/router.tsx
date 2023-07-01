/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {makeHomePage, makeSignInPage} from '../factories/pages';
import {useEffect, useState} from 'react';
import {FakeUseCaseFactory} from '../factories/fake-use-case.factory';
import {SplashScreen} from '../../presentation/components/SplashScreen';
const Stack = createNativeStackNavigator();
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
        if (loggedUser) {
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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLogged ? (
          <Stack.Screen name="Home" component={makeHomePage()} />
        ) : (
          <Stack.Screen name="SignIn" component={makeSignInPage()} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
