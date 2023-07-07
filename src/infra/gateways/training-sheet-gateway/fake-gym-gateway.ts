import {faker} from '@faker-js/faker';
import {TrainingSheet} from '../../../domain/entities/training-sheet';
import {GetTodayTrainingSheetsGateway} from '../../../domain/protocols/gateways';
import {PaymentStatus} from '../../../domain/entities/payment-status';
import {PaymentStatusEnum} from '../../../domain/entities/enums/payment-status';
import moment from 'moment';

const defaultWorkouts = {
  mon: {name: 'Treino de Peito'},
  tue: {name: 'Treino de Costas'},
  wed: {name: 'Treino de Perna'},
  thu: {name: 'Treino de Braços'},
  fri: {name: 'Treino de Perna'},
};

async function sleep(interval: number) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
}

export class FakeGymGateway implements GetTodayTrainingSheetsGateway {
  async getTodayTrainingSheets(
    _params: void,
  ): Promise<GetTodayTrainingSheetsGateway.Result> {
    const todayWeek = moment().format('ddd').toLowerCase();

    await sleep(550);
    if (!defaultWorkouts[todayWeek]) return [];

    return [
      new TrainingSheet({
        id: faker.string.uuid(),
        student: {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          paymentStatus: new PaymentStatus({
            status: PaymentStatusEnum.PAID,
          }),
        },
        workouts: defaultWorkouts,
      }),
      new TrainingSheet({
        id: faker.string.uuid(),
        student: {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          paymentStatus: new PaymentStatus({
            status: PaymentStatusEnum.PAID,
          }),
        },
        workouts: defaultWorkouts,
      }),
      new TrainingSheet({
        id: faker.string.uuid(),
        student: {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          paymentStatus: new PaymentStatus({
            status: PaymentStatusEnum.PENDING,
          }),
        },
        workouts: defaultWorkouts,
      }),
      new TrainingSheet({
        id: faker.string.uuid(),
        student: {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          paymentStatus: new PaymentStatus({
            status: PaymentStatusEnum.PAID,
          }),
        },
        workouts: defaultWorkouts,
      }),
      new TrainingSheet({
        id: faker.string.uuid(),
        student: {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          paymentStatus: new PaymentStatus({
            status: PaymentStatusEnum.LATE,
            unpaidDays: faker.number.int({min: 1, max: 10}),
          }),
        },
        workouts: defaultWorkouts,
      }),
    ];
  }
}
