import {faker} from '@faker-js/faker';
import {TrainingSheet} from '../../src/domain/entities/training-sheet';
import {PaymentStatus} from '../../src/domain/entities/payment-status';
import {PaymentStatusEnum} from '../../src/domain/entities/enums/payment-status';

export const correctTrainingSheet: TrainingSheet = new TrainingSheet({
  id: faker.string.uuid(),
  student: {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    paymentStatus: new PaymentStatus({
      status: PaymentStatusEnum.PAID,
      unpaidDays: 0,
    }),
  },
  workouts: null,
});
