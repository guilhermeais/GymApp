import {GetLoggedUser} from '../../domain/usecases/auth/get-logged-user';
import {Text, SafeAreaView, View} from 'react-native';
type Props = {
  getLoggedUser: GetLoggedUser;
};
export default function Home({getLoggedUser}: Props) {
  const loggedUser = getLoggedUser.execute();

  return (
    <SafeAreaView className="flex-1 p-4 bg-gray-100">
      <View className="items-center pt-4">
        <Text className="text-4xl text-black font-semibold">
          Olá, {loggedUser?.name}
        </Text>
      </View>
    </SafeAreaView>
  );
}
