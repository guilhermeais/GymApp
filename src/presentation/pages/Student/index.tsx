import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {PlusIcon} from 'react-native-heroicons/outline';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import {FlatList} from 'react-native';
import StudentItem from './Item';

export default function Student() {
  return (
    <View className="flex-1 p-4 px-2">
      <View className="items-center mb-4">
        <Text className="text-3xl font-light">Alunos</Text>
      </View>

      <View className="flex-row">
        <View className=" flex-row flex-1 items-center space-x-1 bg-white border-gray-300 border rounded-lg p-1">
          <MagnifyingGlassIcon size={20} color="#cccccc" />
          <TextInput
            className="text-gray-900 dar:text-white flex-1"
            placeholder="Nome do aluno"
          />
        </View>
        <View className="bg-green-500 rounded-full p-2 mx-1">
          <TouchableOpacity>
            <PlusIcon size={23} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        className="px-2 mt-2"
        data={[1, 2]}
        renderItem={() => <StudentItem />}
      />
    </View>
  );
}

export const STUDENT_SCREEN_NAME = 'Student';