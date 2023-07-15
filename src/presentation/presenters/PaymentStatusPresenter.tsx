import {
  CheckIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from 'react-native-heroicons/mini';
import {PaymentStatusEnum} from '../../domain/entities/enums/payment-status';
import {PaymentStatus} from '../../domain/entities/payment-status';

export class PaymentStatusPresenter {
  static getTextByStatus(paymentStatus: PaymentStatus): string {
    switch (paymentStatus.status) {
      case PaymentStatusEnum.PENDING:
        return 'Pendente';
      case PaymentStatusEnum.PAID:
        return 'Em dia';
      case PaymentStatusEnum.LATE:
        return `Atrasado há ${paymentStatus.unpaidDays} dias`;
    }
  }

  static getColorByStatus(paymentStatus: PaymentStatus): string {
    switch (paymentStatus.status) {
      case PaymentStatusEnum.PENDING:
        return 'bg-yellow-500';
      case PaymentStatusEnum.PAID:
        return 'bg-green-500';
      case PaymentStatusEnum.LATE:
        return 'bg-red-500';
    }
  }

  static getIconByStatus(paymentStatus: PaymentStatus) {
    switch (paymentStatus.status) {
      case PaymentStatusEnum.PENDING:
        return <ClockIcon size={12} color="white" />;
      case PaymentStatusEnum.PAID:
        return <CheckIcon size={12} color="white" />;
      case PaymentStatusEnum.LATE:
        return <ExclamationTriangleIcon size={12} color="white" />;
    }
  }
}
