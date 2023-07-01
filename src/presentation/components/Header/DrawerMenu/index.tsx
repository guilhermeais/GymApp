import React, {useState} from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {
  ChevronLeftIcon,
  ArrowLeftOnRectangleIcon,
} from 'react-native-heroicons/solid';
import {TouchableOpacity} from 'react-native';
import {UseCaseFactory} from '../../../../main/factories/protocols/use-case.factory';

type Props = DrawerContentComponentProps & {
  useCaseFactory: UseCaseFactory;
};
export default function DrawerMenu(props: Props) {
  const [logoutLoading, setLogoutLoading] = useState(false);
  const {navigation, useCaseFactory} = props;
  const getLoggedUser = useCaseFactory.createGetLoggedUser();
  const logout = useCaseFactory.createLogout();
  const loggedUser = getLoggedUser.execute();

  async function onPressLogout() {
    try {
      setLogoutLoading(true);
      await logout.execute();
    } catch (error) {
      console.error(error);
    } finally {
      setLogoutLoading(false);
    }
  }
  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props}>
        <View>
          <View className="flex-row p-2">
            <TouchableOpacity onPress={() => navigation.closeDrawer()}>
              <ChevronLeftIcon color="black" size={30} />
            </TouchableOpacity>
          </View>

          <View className="mt-2 flex-1">
            <DrawerItemList {...props} />
          </View>
        </View>
      </DrawerContentScrollView>

      <View className="p-4 flex-row justify-between items-center space-x-4 bg-gray-200">
        <Image
          className="w-10 h-10 rounded-full"
          source={{
            uri: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
          }}
        />
        <View className="item-center">
          <Text className="text-lg">{loggedUser?.name}</Text>
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity onPress={onPressLogout}>
            {!logoutLoading ? (
              <ArrowLeftOnRectangleIcon size={25} color="black" />
            ) : (
              <ActivityIndicator size="small" color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
