import {DrawerHeaderProps} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Bars3Icon} from 'react-native-heroicons/outline';

type Props = DrawerHeaderProps;

export function Header({navigation}: Props) {
  return (
    <View className=" p-4 pt-8 bg-white">
      <View className="flex-row items-center space-x-14">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Bars3Icon size={35} color="black" className="mr-4" />
        </TouchableOpacity>

        <Text className="text-4xl text-black font-semibold">
          Gym<Text className="text-green-500">App</Text>
        </Text>
      </View>
    </View>
  );
}
