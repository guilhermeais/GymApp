import {TrainingSheet} from '../../entities/training-sheet';

export interface GetTodayTrainingSheetsGateway {
  getTodayTrainingSheets: (
    params: GetTodayTrainingSheetsGateway.Params,
  ) => Promise<GetTodayTrainingSheetsGateway.Result>;
}

export namespace GetTodayTrainingSheetsGateway {
  export type Params = void;
  export type Result = TrainingSheet[];
}
