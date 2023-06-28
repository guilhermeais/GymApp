import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecoilRoot} from 'recoil';
import {makeSignInPage, makeHomePage} from '../factories/pages';
const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="SignIn" component={makeSignInPage()} /> */}
          <Stack.Screen name="Home" component={makeHomePage()} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
