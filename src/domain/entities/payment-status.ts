import {PaymentStatusEnum} from './enums/payment-status';

export class PaymentStatus {
  status: PaymentStatusEnum;
  unpaidDays?: number;
  constructor(props: PaymentStatusProps) {
    Object.assign(this, props);
  }
}

export type PaymentStatusProps = {
  status: PaymentStatusEnum;
  unpaidDays?: number;
};
