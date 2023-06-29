import {GetTodayTrainingSheetsGateway} from '../../protocols/gateways';

export class GetTodayTrainingSheets {
  constructor(private readonly gymGateway: GetTodayTrainingSheetsGateway) {}

  async execute() {
    const todayTrainingSheets = await this.gymGateway.getTodayTrainingSheets();

    return todayTrainingSheets;
  }
}
