import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import TextWithSeparator from '../../components/TextWithSeparator';
import {Login} from '../../../domain/usecases/auth/login';
import {Email} from '../../../domain/entities/email';
import {InputPassword} from '../../components/InputPassword';
import {Password} from '../../../domain/entities/password';
import {DependenciesContext} from '../../../main/context/DependenciesContext';

function SignIn(): JSX.Element {
  const {useCaseFactory} = useContext(DependenciesContext);
  const login = useCaseFactory.createLogin();
  const [hasStartedEditingEmail, setHasStartedEditingEmail] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [hasStartedEditingPassword, setHasStartedEditingPassword] =
    useState(false);
  const [loginData, setLoginData] = useState<Login.Params>({
    email: new Email(''),
    password: new Password(''),
  });
  const userCanLogin = loginData.email.isValid && loginData.password.isValid;

  const handleLoginPress = async () => {
    setHasStartedEditingEmail(true);
    setHasStartedEditingPassword(true);
    if (!userCanLogin) return;
    try {
      setLoginLoading(true);
      await login.execute(loginData);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleEmailChange = (email: string) => {
    setHasStartedEditingEmail(true);
    loginData.email.value = email;
    setLoginData(prevState => {
      return {
        ...prevState,
        email: loginData.email,
      };
    });
  };

  const handlePasswordChange = (password: string) => {
    setHasStartedEditingPassword(true);
    loginData.password.value = password;

    setLoginData(prevState => ({...prevState, password: loginData.password}));
  };

  const loginButtonStyle = [
    userCanLogin ? 'bg-green-500' : 'bg-gray-400',
    'rounded-full',
    'py-3',
    'px-6',
    'items-center',
  ].join(' ');

  return (
    <SafeAreaView className="flex-1 p-4 bg-gray-100">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className="items-center pt-4">
          <Text className="text-4xl text-black font-semibold">
            Gym<Text className="text-green-500">App</Text>
          </Text>

          <Text> Academia na palma da sua mão </Text>
        </View>

        <View className="flex-1 justify-center">
          <View>
            <View className="grid gap-5 mb-6 md:grid-cols-2">
              <View>
                <CustomTextInput
                  id="input-email"
                  value={loginData.email.value}
                  onChangeText={handleEmailChange}
                  placeholder="Email"
                  label="Seu email"
                  hasError={hasStartedEditingEmail && !loginData.email.isValid}
                  errorMessage="Email inválido"
                  autoCapitalize="none"
                  returnKeyType="next"
                  blurOnSubmit={false}
                />
              </View>

              <View>
                <InputPassword
                  id="input-password"
                  label="Sua senha"
                  value={loginData.password.value}
                  onChangeText={handlePasswordChange}
                  placeholder="Digite sua senha"
                  autoCapitalize="none"
                  keyboardType="default"
                  onSubmitEditing={handleLoginPress}
                  hasError={
                    hasStartedEditingPassword && !loginData.password.isValid
                  }
                  errorMessage={loginData.password.errorMessages
                    .map(message => `- ${message}`)
                    .join('\n')}
                />
              </View>
            </View>
          </View>
        </View>

        <View className="mb-10">
          <TouchableOpacity
            disabled={!userCanLogin}
            className={loginButtonStyle}
            onPress={handleLoginPress}>
            {loginLoading ? (
              <ActivityIndicator
                size="small"
                color="white"
                style={{marginRight: 5}}
              />
            ) : (
              <Text className="text-white font-semibold text-lg">Entrar</Text>
            )}
          </TouchableOpacity>

          <TextWithSeparator>Ou</TextWithSeparator>

          <TouchableOpacity
            className="bg-white border border-gray-200 rounded-full py-3 px-6 items-center mt-4"
            onPress={() => {}}>
            <Text className="text-gray-700 font-semibold text-lg">Assinar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;

export const SIGN_SCREEN_IN_NAME = 'SignIn';
