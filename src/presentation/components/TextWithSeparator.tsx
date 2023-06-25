import React, {ReactNode} from 'react';
import {View, Text} from 'react-native';

type TextWithSeparatorProps = {
  children: ReactNode;
};

export default function TextWithSeparator({children}: TextWithSeparatorProps) {
  return (
    <View className="flex-row items-center justify-center mt-4">
      <View className="flex-grow border-t border-gray-300" />

      <Text className="text-gray-500 mx-2">{children}</Text>

      <View className="flex-grow border-t border-gray-300" />
    </View>
  );
}
