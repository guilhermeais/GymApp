import {Text, View} from 'react-native';
import {PaymentStatusEnum} from '../../domain/entities/enums/payment-status';
import {ExclamationTriangleIcon} from 'react-native-heroicons/mini';

type Props = {
  status: PaymentStatusEnum;
  unpaidDays: number;
};
export default function PaymentStatus({status, unpaidDays}: Props) {
  function getTextByStatus(): string {
    switch (status) {
      case PaymentStatusEnum.PENDING:
        return 'Pendente';
      case PaymentStatusEnum.PAID:
        return 'Em dia';
      case PaymentStatusEnum.LATE:
        return `Atrasado há ${unpaidDays} dias`;
    }
  }

  function getColorByStatus(): string {
    switch (status) {
      case PaymentStatusEnum.PENDING:
        return 'bg-yellow-500';
      case PaymentStatusEnum.PAID:
        return 'bg-green-500';
      case PaymentStatusEnum.LATE:
        return 'bg-red-500';
    }
  }
  return (
    <View className="items-center">
      <View className={`${getColorByStatus()} rounded-full p-1 ml-2`}>
        <ExclamationTriangleIcon size={12} color="white" />
      </View>
      <Text className="text-center text-xs tracking-tighter w-24 flex-wrap">
        {getTextByStatus()}
      </Text>
    </View>
  );
}
