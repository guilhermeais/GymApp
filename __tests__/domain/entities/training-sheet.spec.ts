import {faker} from '@faker-js/faker';
import {TrainingSheet} from '../../../src/domain/entities/training-sheet';
import {PaymentStatusEnum} from '../../../src/domain/entities/enums/payment-status';
import {PaymentStatus} from '../../../src/domain/entities/payment-status';
import MockDate from 'mockdate';
import moment from 'moment';

describe('TrainingSheet', () => {
  test('should return today workout', () => {
    const actualDate = moment('04/01/2023', 'DD/MM/YYYY').toDate();
    const actualWeekDay = moment(actualDate).format('ddd').toLowerCase();
    MockDate.set(actualDate);
    const expectedTodayTraining = {
      name: 'Treino de Peito',
    };

    const trainingSheet = new TrainingSheet({
      id: faker.string.uuid(),
      student: {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        paymentStatus: new PaymentStatus({
          status: PaymentStatusEnum.PAID,
          unpaidDays: 0,
        }),
      },
      workouts: {
        [actualWeekDay]: expectedTodayTraining,
      },
    });

    expect(trainingSheet.todayWorkout).toEqual(expectedTodayTraining);

    MockDate.reset();
  });

  test('should return empty if today has no workout', () => {
    const trainingSheet = new TrainingSheet({
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

    expect(trainingSheet.todayWorkout).toEqual(null);
  });
});
