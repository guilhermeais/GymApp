import {TouchableOpacity, View} from 'react-native';

type Props = {
  icon: JSX.Element;
  text: JSX.Element;
  onPress?: () => void;
};

export default function MostAccessedButton({
  text,
  icon,
  onPress = () => {},
}: Props) {
  return (
    <View className="items-center">
      <TouchableOpacity className="flex-col items-center" onPress={onPress}>
        <View className="bg-green-500 rounded-full p-2 mx-5">{icon}</View>
        {text}
      </TouchableOpacity>
    </View>
  );
}
