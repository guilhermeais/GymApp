import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../presentation/pages/SignIn';
import {RecoilRoot} from 'recoil';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
