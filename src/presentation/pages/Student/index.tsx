/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, ActivityIndicator} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {PlusIcon} from 'react-native-heroicons/outline';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import {FlatList} from 'react-native';
import StudentItem from './Item';
import {ListStudents} from '../../../domain/usecases/student';
import {DependenciesContext} from '../../../main/context/DependenciesContext';

export default function StudentPage() {
  const {useCaseFactory} = useContext(DependenciesContext);

  const [isLoadingStudents, setIsLoadingStudents] = useState(false);
  const [studentsResult, setStudentsResult] = useState<ListStudents.Response>();
  const listStudents = useCaseFactory.createListStudents();

  useEffect(() => {
    async function getStudents() {
      try {
        setIsLoadingStudents(true);
        const result = await listStudents.execute();
        console.log(result);
        setStudentsResult(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingStudents(false);
      }
    }

    getStudents();
  }, []);

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
        data={studentsResult?.students || []}
        renderItem={({item: student}) => <StudentItem student={student} />}
        ListEmptyComponent={
          isLoadingStudents ? (
            <View className="items-center">
              <ActivityIndicator size="large" color="black" />
              <Text className="text-2xl">Carregando...</Text>
            </View>
          ) : (
            <View className="flex flex-col items-center justify-center p-4">
              <Text className="text-xl font-bold mb-4 text-center">
                Não há nenhum aluno cadastrado.
              </Text>
            </View>
          )
        }
      />
    </View>
  );
}

export const STUDENT_SCREEN_NAME = 'Student';
