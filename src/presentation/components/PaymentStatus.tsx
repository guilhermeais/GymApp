import {Text, View} from 'react-native';
import {PaymentStatusEnum} from '../../domain/entities/enums/payment-status';
import {PaymentStatusPresenter} from '../presenters/payment-status.presenter';
type Props = {
  status: PaymentStatusEnum;
  unpaidDays?: number;
};
export default function PaymentStatus({status, unpaidDays}: Props) {
  return (
    <View className="items-center">
      <View
        className={`${PaymentStatusPresenter.getColorByStatus({
          status,
          unpaidDays,
        })} rounded-full p-1 ml-2`}>
        {PaymentStatusPresenter.getIconByStatus({
          status,
          unpaidDays,
        })}
      </View>
      <Text className="text-center text-xs tracking-tighter w-24 flex-wrap">
        {PaymentStatusPresenter.getTextByStatus({
          status,
          unpaidDays,
        })}
      </Text>
    </View>
  );
}
