/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GetTodayTrainingSheets} from '../../../domain/usecases/gym/get-today-training-sheets';
import TrainingSheetItem from './Item';
import {UseCaseFactory} from '../../../main/factories/protocols/use-case.factory';
import {ActivityIndicator} from 'react-native';
type Props = {
  useCaseFactory: UseCaseFactory;
};
export default function TrainingSheet({useCaseFactory: useCaseFactory}: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [todayTrainingSheets, setTodayTrainingSheets] =
    useState<GetTodayTrainingSheets.Result>([]);

  const getTodayTrainingSheets = useCaseFactory.createGetTodayTrainingSheet();
  async function fetchTrainingSheets() {
    try {
      setIsLoading(true);
      const result = await getTodayTrainingSheets.execute();
      setTodayTrainingSheets(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }

  const onRefresh = () => {
    setIsRefreshing(true);
    fetchTrainingSheets();
  };

  useEffect(() => {
    fetchTrainingSheets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: 'white',
        padding: 13,
        borderRadius: 8,
      }}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={['green', 'black']}
        />
      }
      scrollEnabled
      data={todayTrainingSheets}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({item}) => TrainingSheetItem(item)}
      ListEmptyComponent={
        isLoading ? (
          <View className="items-center">
            <ActivityIndicator size="large" color="black" />
            <Text className="text-2xl">Carregando...</Text>
          </View>
        ) : (
          <View className="flex flex-col items-center justify-center p-4">
            <Text className="text-xl font-bold mb-4 text-center">
              Não há nenhuma ficha cadastrada para hoje.
            </Text>
            <Text className="text-center mb-4">
              Cadastre uma clicando no botão abaixo
            </Text>
            <TouchableOpacity className="bg-green-500  rounded-lg px-4 py-2">
              <Text className="text-white">Cadastrar Ficha</Text>
            </TouchableOpacity>
          </View>
        )
      }
    />
  );
}
