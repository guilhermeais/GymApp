import {PaymentStatus} from './payment-status';
import moment from 'moment';

export class TrainingSheet {
  private props: TrainingSheetProps;

  constructor(props: TrainingSheetProps) {
    this.props = props;
  }

  get todayWorkout() {
    const actualWeekday = moment(new Date()).format('ddd').toLowerCase();

    return this.props?.workouts?.[actualWeekday] || null;
  }

  get student() {
    return this.props.student;
  }
}

export type TrainingSheetProps = {
  id: string;
  student: {
    id: string;
    name: string;
    paymentStatus: PaymentStatus;
  };
  workouts: {
    mon?: {name: string};
    tue?: {name: string};
    wed?: {name: string};
    thu?: {name: string};
    fri?: {name: string};
    sat?: {name: string};
    sun?: {name: string};
  };
};
