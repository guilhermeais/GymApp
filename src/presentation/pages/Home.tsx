/* eslint-disable react/react-in-jsx-scope */
import {GetLoggedUser} from '../../domain/usecases/auth/get-logged-user';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {Bars3Icon, PlusIcon} from 'react-native-heroicons/outline';
import {
  CheckIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from 'react-native-heroicons/mini';
import {
  UserIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
} from 'react-native-heroicons/solid';
import MemoThumb from '../components/MemoThumb';
import MostAccessedButton from '../components/MostAccessedButton';
type Props = {
  getLoggedUser: GetLoggedUser;
};

const data: {
  name: string;
  train: string;
  payStatus: 'PAYED' | 'PENDING' | 'LATE';
  unpaidDays?: number;
}[] = [
  {
    name: 'Guilherme Teixeira',
    payStatus: 'PAYED',
    train: 'Treino de Peito',
  },
  {
    name: 'Pedro Teixeira',
    payStatus: 'PENDING',
    train: 'Treino de Peito',
  },
  {
    name: 'Guilherme Teixeira Ais AA',
    payStatus: 'LATE',
    unpaidDays: 2,
    train: 'Treino de Peito',
  },
  {
    name: 'Guilherme Teixeira',
    payStatus: 'LATE',
    unpaidDays: 2,
    train: 'Treino de Peito',
  },
  {
    name: 'Guilherme Teixeira',
    payStatus: 'LATE',
    unpaidDays: 2,
    train: 'Treino de Peito',
  },
  {
    name: 'Guilherme Teixeira',
    payStatus: 'LATE',
    unpaidDays: 2,
    train: 'Treino de Peito',
  },
];
function getIconByStatus(
  status: 'PAYED' | 'PENDING' | 'LATE',
  unpaidDays?: number,
) {
  if (status === 'PAYED') {
    return (
      <View className="items-center">
        <View className="bg-green-500 rounded-full p-1 ml-2">
          <CheckIcon size={12} color="white" />
        </View>
        <Text className="text-center text-xs tracking-tighter">Em dia</Text>
      </View>
    );
  }

  if (status === 'PENDING') {
    return (
      <View className="items-center">
        <View className="bg-yellow-500 rounded-full p-1 ml-2">
          <ClockIcon size={12} color="white" />
        </View>
        <Text className="text-center text-xs tracking-tighter">Pendente</Text>
      </View>
    );
  }

  if (status === 'LATE') {
    return (
      <View className="items-center">
        <View className="bg-red-500 rounded-full p-1 ml-2">
          <ExclamationTriangleIcon size={12} color="white" />
        </View>
        <Text className="text-center text-xs tracking-tighter">
          Atrasado há {unpaidDays} dias
        </Text>
      </View>
    );
  }
}
function renderItem({
  item,
}: {
  item: {
    name: string;
    train: string;
    payStatus: 'PAYED' | 'PENDING' | 'LATE';
    unpaidDays?: number;
  };
}) {
  return (
    <TouchableOpacity className="bg-gray-200 p-2 rounded-lg flex-1 mb-4">
      <View className="flex-row justify-between">
        <View>
          <View className="flex-row">
            <Text className="font-semibold">Aluno (a): </Text>
            <Text>{item.name}</Text>
          </View>
          <View className="flex-row">
            <Text className="font-semibold">Treino: </Text>
            <Text className="">{item.train} </Text>
          </View>
        </View>

        <View>{getIconByStatus(item.payStatus, item.unpaidDays)}</View>
      </View>
    </TouchableOpacity>
  );
}
export default function Home({getLoggedUser}: Props) {
  const loggedUser = getLoggedUser.execute();

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
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: 'space-between',
              }}>
              <MostAccessedButton
                icon={<UserIcon size={28} color="white" />}
                text={<Text className="font-bold">Alunos</Text>}
              />

              <MostAccessedButton
                icon={<ClipboardDocumentListIcon size={28} color="white" />}
                text={
                  <View className="flex flex-col items-center">
                    <Text className="font-bold">Fichas de</Text>
                    <Text className="font-bold">Treino</Text>
                  </View>
                }
              />

              <MostAccessedButton
                icon={<BanknotesIcon size={28} color="white" />}
                text={<Text className="font-bold -inset-5">Mensalidade</Text>}
              />

              <MostAccessedButton
                icon={<BanknotesIcon size={28} color="white" />}
                text={<Text className="font-bold">Treinos</Text>}
              />
            </ScrollView>
          </View>
        </View>

        <View className="mt-4 flex-1">
          <Text className="text-xl font-bold">Fichas de Hoje</Text>

          <FlatList
            className="mt-4"
            contentContainerStyle={{
              backgroundColor: 'white',
              padding: 13,
              borderRadius: 8,
            }}
            scrollEnabled
            data={data}
            keyExtractor={(item, i) => item.name + '.' + i}
            renderItem={renderItem}
            ListEmptyComponent={
              <View className="flex flex-col items-center justify-center p-4">
                <Text className="text-xl font-bold mb-4 text-center">
                  Você ainda não tem nenhuma ficha cadastrada :(
                </Text>
                <Text className="text-center mb-4">
                  Cadastre uma clicando no botão abaixo
                </Text>
                <TouchableOpacity className="bg-green-500  rounded-lg px-4 py-2">
                  <Text className="text-white">Cadastrar Ficha</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
