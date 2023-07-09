import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Student} from '../../../domain/entities/student';
import {PaymentStatusPresenter} from '../../presenters/payment-status.presenter';

type Props = {
  student: Student;
};
export default function StudentItem({student}: Props) {
  return (
    <TouchableOpacity>
      <View className="bg-white p-4 rounded-lg mb-4">
        <Text className="text-xl">{student.name} </Text>

        <View className="mt-2">
          <View>
            <View className="flex-row space-x-1">
              <Text className="text-gray-600">
                {PaymentStatusPresenter.getTextByStatus(student.paymentStatus)}
              </Text>
              <View
                className={`rounded-full p-1 ${PaymentStatusPresenter.getColorByStatus(
                  student.paymentStatus,
                )}`}>
                {PaymentStatusPresenter.getIconByStatus(student.paymentStatus)}
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
