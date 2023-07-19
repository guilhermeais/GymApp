import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import React, {useState, useContext} from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Route, useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../components/CustomTextInput';
import InputDate from '../../components/InputDate';
import {CreateStudent} from '../../../domain/usecases/student';
import {Email} from '../../../domain/entities/email';
import {DependenciesContext} from '../../../main/context/DependenciesContext';

export type Props = {
  route: Route<string, {onCreate: () => void}>;
};
export default function CreateStudentScreen({route}: Props) {
  const {useCaseFactory} = useContext(DependenciesContext);
  const createStudent = useCaseFactory.createCreateStudent();
  const navigation = useNavigation();
  const [createStudentLoading, setCreateStudentLoading] = useState(false);
  const [hasStartedEditingEmail, setHasStartedEditingEmail] = useState(false);

  const [studentProps, setStudentProps] = useState<
    Partial<CreateStudent.Request>
  >({
    email: new Email(''),
  });

  const canCreateUser = () => {
    return (
      studentProps.name &&
      (studentProps.email?.value ? studentProps.email.isValid : true)
    );
  };

  const handleEmailChange = (email: string) => {
    setHasStartedEditingEmail(true);
    studentProps.email.value = email;
    setStudentProps(prevState => {
      return {
        ...prevState,
        email: studentProps.email,
      };
    });
  };

  const handleCreateUserPress = async () => {
    setHasStartedEditingEmail(true);
    if (!canCreateUser()) return;
    try {
      setCreateStudentLoading(true);
      await createStudent.execute(studentProps as CreateStudent.Request);
      route.params.onCreate();
      navigation.goBack();
    } finally {
      setCreateStudentLoading(false);
    }
  };

  const createUserButtonStyle = [
    canCreateUser() ? 'bg-green-500' : 'bg-gray-400',
    'rounded-full',
    'py-3',
    'px-6',
    'items-center',
  ].join(' ');

  return (
    <View className="p-5 flex-1">
      <View className="flex-row">
        <TouchableOpacity
          className="flex-row justify-start space-x-1 mt-3 items-center"
          onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color="black" size={24} />
          <Text className="font-bold">Voltar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 mt-3 rounded-lg ">
        <Text className="text-2xl">Criar Aluno</Text>

        <View className="mt-5 space-y-4">
          <View>
            <CustomTextInput
              onChangeText={text => {
                setStudentProps({
                  ...studentProps,
                  name: text,
                });
              }}
              className="p-2 rounded-lg"
              label="Nome Completo"
              placeholder="Nome Completo"
            />
          </View>

          <View>
            <InputDate
              label="Data de Nascimento"
              onDateChange={date => {
                setStudentProps({...studentProps, birthDate: date});
              }}
            />
          </View>

          <View>
            <CustomTextInput
              onChangeText={(_, rawText) => {
                setStudentProps({...studentProps, phoneNumber: rawText});
              }}
              className="p-2 rounded-lg"
              label="Telefone"
              placeholder="Telefone"
              mask="(99) 9999-99999"
            />
          </View>

          <View>
            <CustomTextInput
              onChangeText={text => {
                handleEmailChange(text);
              }}
              type="email"
              className="p-2 rounded-lg"
              label="Email"
              hasError={
                hasStartedEditingEmail && studentProps.email.value
                  ? !studentProps.email.isValid
                  : false
              }
              errorMessage="Email inválido"
              placeholder="johndoe@mail.com"
              autoCapitalize="none"
            />
          </View>
        </View>
      </ScrollView>

      <View className="flex-row justify-between items-end space-x-2 mt-4">
        <View className="flex-1">
          <TouchableOpacity
            disabled={!canCreateUser()}
            className={createUserButtonStyle}
            onPress={handleCreateUserPress}>
            {createStudentLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text className="text-white font-semibold text-lg">Criar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const CREATE_STUDENT_SCREEN_NAME = 'CreateStudent';
