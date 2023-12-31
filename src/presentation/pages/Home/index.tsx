/* eslint-disable react/react-in-jsx-scope */
import {Text, SafeAreaView, View} from 'react-native';
import TrainingSheet from '../../components/TrainingSheet';
import MostAccessedPages from '../../components/MostAccessedPages';
import Memo from '../../components/Memo';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 py-4 bg-gray-100">
      <View className="px-4 flex-1">
        <Memo />

        <View className="mt-4">
          <Text className="text-xl font-bold">Mais Acessados</Text>

          <View className="mt-4">
            <MostAccessedPages />
          </View>
        </View>

        <View className="mt-4 flex-1">
          <Text className="text-xl font-bold">Fichas de Hoje</Text>

          <View className="mt-4">
            <TrainingSheet />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export const HOME_SCREEN_NAME = 'Home';
