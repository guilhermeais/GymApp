import {PaymentStatusEnum} from '../../entities/enums/payment-status';
import {GetTodayTrainingSheetsGateway} from '../../protocols/gateways';

export class GetTodayTrainingSheets {
  constructor(
    private readonly trainingSheetGateway: GetTodayTrainingSheetsGateway,
  ) {}

  async execute(
    _params: GetTodayTrainingSheets.Params,
  ): Promise<GetTodayTrainingSheets.Result> {
    const todayTrainingSheets =
      await this.trainingSheetGateway.getTodayTrainingSheets();

    return todayTrainingSheets.map(trainingSheet => {
      return {
        id: trainingSheet.id,
        student: {
          id: trainingSheet.student.id,
          name: trainingSheet.student.name,
          paymentStatus: trainingSheet.student.paymentStatus.status,
          unpaidDays: trainingSheet.student.paymentStatus.unpaidDays,
        },
        todayWorkout: trainingSheet.todayWorkout,
      };
    });
  }
}

export namespace GetTodayTrainingSheets {
  export type Params = void;
  export type Result = TrainingSheetM[];

  export type TrainingSheetM = {
    id: string;
    todayWorkout: {name: string};
    student: {
      id: string;
      name: string;
      paymentStatus: PaymentStatusEnum;
      unpaidDays?: number;
    };
  };
}
