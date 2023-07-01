import {ScrollView, TouchableOpacity, View} from 'react-native';
import {PlusIcon} from 'react-native-heroicons/outline';
import MemoThumb from './MemoThumb';

export default function Memo() {
  return (
    <View className="border border-gray-200 rounded-xl py-2">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        className="space-x-2">
        <View className="items-start">
          <TouchableOpacity className="flex-row items-center">
            <View className="bg-green-500 rounded-full p-2 ml-2">
              <PlusIcon size={35} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <MemoThumb uri="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
        <MemoThumb uri="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
        <MemoThumb uri="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=698&q=80" />
        <MemoThumb uri="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
        <MemoThumb uri="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
      </ScrollView>
    </View>
  );
}
