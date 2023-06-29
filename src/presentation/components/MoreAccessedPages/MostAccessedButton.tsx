import {TouchableOpacity, View} from 'react-native';

type Props = {
  icon: JSX.Element;
  text: JSX.Element;
};

export default function MostAccessedButton({text, icon}: Props) {
  return (
    <View className="items-center">
      <TouchableOpacity className="flex-col items-center">
        <View className="bg-green-500 rounded-full p-2 mx-5">{icon}</View>
        {text}
      </TouchableOpacity>
    </View>
  );
}
