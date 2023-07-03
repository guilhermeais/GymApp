import {Text} from 'react-native';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {GetTodayTrainingSheets} from '../../../domain/usecases/training-sheet/get-today-training-sheets';
import PaymentStatus from '../PaymentStatus';

type Props = GetTodayTrainingSheets.TrainingSheetM;

export default function TrainingSheetItem({todayWorkout, student}: Props) {
  console.log(todayWorkout);
  console.log(student);
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
          <PaymentStatus
            status={student.paymentStatus}
            unpaidDays={student.unpaidDays}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
