/* eslint-disable react/react-in-jsx-scope */
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Bars3Icon, PlusIcon} from 'react-native-heroicons/outline';
import MemoThumb from '../components/MemoThumb';
import TrainingSheet from '../components/TrainingSheet';
import {UseCaseFactory} from '../../main/factories/protocols/use-case.factory';
import MoreAccessedPages from '../components/MoreAccessedPages';
type Props = {
  useCaseFactory: UseCaseFactory;
};

export default function Home({useCaseFactory}: Props) {
  return (
    <SafeAreaView className="flex-1 py-4  bg-gray-100">
      <View className="p-4 pt-8 bg-white">
        <View className="flex-row items-center space-x-14">
          <Bars3Icon size={35} color="black" className="mr-4" />

          <Text className="text-4xl text-black font-semibold">
            Gym<Text className="text-green-500">App</Text>
          </Text>
        </View>
      </View>

      <View className="px-4 flex-1">
        <View className="border border-gray-200 rounded-xl mt-5 py-2">
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            className="space-x-2">
            <View className="items-start">
              <TouchableOpacity className="flex-row items-center">
                <View className="bg-green-500 rounded-full p-2 ml-2">
                  <PlusIcon size={35} color="white" />
                </View>
              </TouchableOpacity>
            </View>

            <MemoThumb uri="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
            <MemoThumb uri="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            <MemoThumb uri="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=698&q=80" />
            <MemoThumb uri="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
            <MemoThumb uri="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
          </ScrollView>
        </View>

        <View className="mt-4">
          <Text className="text-xl font-bold">Mais Acessados</Text>

          <View className="mt-4">
            <MoreAccessedPages></MoreAccessedPages>
          </View>
        </View>

        <View className="mt-4 flex-1">
          <Text className="text-xl font-bold">Fichas de Hoje</Text>

          <View className="mt-4">
            <TrainingSheet useCaseFactory={useCaseFactory} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
