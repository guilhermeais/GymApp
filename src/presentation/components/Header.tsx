import {Text, View} from 'react-native';
import {Bars3Icon} from 'react-native-heroicons/outline';

export function Header() {
  return (
    <View className=" p-4 pt-8 bg-white">
      <View className="flex-row items-center space-x-14">
        <Bars3Icon size={35} color="black" className="mr-4" />

        <Text className="text-4xl text-black font-semibold">
          Gym<Text className="text-green-500">App</Text>
        </Text>
      </View>
    </View>
  );
}
