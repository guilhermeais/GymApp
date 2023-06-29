import {Text} from 'react-native';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {
  CheckIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from 'react-native-heroicons/mini';
import {GetTodayTrainingSheets} from '../../../domain/usecases/gym/get-today-training-sheets';
import {PaymentStatusEnum} from '../../../domain/entities/enums/payment-status';

function getIconByStatus(status: PaymentStatusEnum, unpaidDays?: number) {
  if (status === PaymentStatusEnum.PAID) {
    return (
      <View className="items-center">
        <View className="bg-green-500 rounded-full p-1 ml-2">
          <CheckIcon size={12} color="white" />
        </View>
        <Text className="text-center text-xs tracking-tighter">Em dia</Text>
      </View>
    );
  }

  if (status === PaymentStatusEnum.PENDING) {
    return (
      <View className="items-center">
        <View className="bg-yellow-500 rounded-full p-1 ml-2">
          <ClockIcon size={12} color="white" />
        </View>
        <Text className="text-center text-xs tracking-tighter">Pendente</Text>
      </View>
    );
  }

  if (status === PaymentStatusEnum.LATE) {
    return (
      <View className="items-center">
        <View className="bg-red-500 rounded-full p-1 ml-2">
          <ExclamationTriangleIcon size={12} color="white" />
        </View>
        <Text className="text-center text-xs tracking-tighter">
          Atrasado há {unpaidDays} dias
        </Text>
      </View>
    );
  }
}

type Props = GetTodayTrainingSheets.TrainingSheetM;

export default function TrainingSheetItem({todayWorkout, student}: Props) {
  return (
    <TouchableOpacity className="bg-gray-200 p-2 rounded-lg flex-1 mb-4">
      <View className="flex-row justify-between">
        <View>
          <View className="flex-row">
            <Text className="font-semibold">Aluno (a): </Text>
            <Text>{student.name}</Text>
          </View>
          <View className="flex-row">
            <Text className="font-semibold">Treino: </Text>
            <Text className="">{todayWorkout.name} </Text>
          </View>
        </View>

        <View>
          {getIconByStatus(student.paymentStatus, student.unpaidDays)}
        </View>
      </View>
    </TouchableOpacity>
  );
}
