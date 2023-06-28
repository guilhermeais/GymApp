import {Image, TouchableOpacity, View} from 'react-native';

type Props = {
  uri: string;
  onPress?: () => void;
};

export default function MemoThumb({uri, onPress}: Props) {
  return (
    <View className="items-start">
      <TouchableOpacity className="flex-row items-center" onPress={onPress}>
        <View className="bg-green-500 rounded-full w-14 h-14 ml-2 border border-2 border-green-500">
          <Image
            className="w-full h-full rounded-full"
            source={{
              uri,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
