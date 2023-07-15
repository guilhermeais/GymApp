import {View, Text} from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../components/CustomTextInput';
import InputDate from '../../components/InputDate';

export default function CreateStudent() {
  const navigation = useNavigation();
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

      <View className="flex-1 mt-3 rounded-lg ">
        <Text className="text-2xl">Criar Aluno</Text>

        <View className="mt-5 space-y-4">
          <View>
            <CustomTextInput
              className="p-2 rounded-lg"
              label="Nome Completo"
              placeholder="Nome Completo"
            />
          </View>

          <View>
            <InputDate label="Data De nascimento" />
          </View>
        </View>
      </View>
    </View>
  );
}

export const CREATE_STUDENT_SCREEN_NAME = 'CreateStudent';
