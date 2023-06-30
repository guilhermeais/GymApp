import {Text} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {} from 'react-native';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function SplashScreen() {
  return (
    <SafeAreaView className="flex flex-1 items-center justify-center">
      <View className="items-center">
        <ActivityIndicator size="large" color="black" />
      </View>
      <Text className="text-4xl text-black font-semibold">
        Gym<Text className="text-green-500">App</Text>
      </Text>
    </SafeAreaView>
  );
}
