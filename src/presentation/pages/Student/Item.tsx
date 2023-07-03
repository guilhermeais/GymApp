import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CheckIcon} from 'react-native-heroicons/mini';

export default function StudentItem() {
  return (
    <TouchableOpacity>
      <View className="bg-white p-4 rounded-lg mb-4">
        <Text className="text-xl">Guilherme Teixeira </Text>

        <View className="mt-2">
          <View>
            <View className="flex-row space-x-1">
              <Text className="text-gray-600">Em dia</Text>
              <View className="bg-green-500 rounded-full p-1">
                <CheckIcon color="white" size={12} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
