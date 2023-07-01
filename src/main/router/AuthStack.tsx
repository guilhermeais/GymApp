/* eslint-disable react-hooks/exhaustive-deps */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {makeSignInPage} from '../factories/pages';
import {SIGN_SCREEN_IN_NAME} from '../../presentation/pages/SignIn';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SIGN_SCREEN_IN_NAME} component={makeSignInPage()} />
    </Stack.Navigator>
  );
}
