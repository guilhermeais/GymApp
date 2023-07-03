import {MockProxy, mock} from 'jest-mock-extended';
import {GetTodayTrainingSheetsGateway} from '../../../../src/domain/protocols/gateways/training-sheet-gateway';
import {GetTodayTrainingSheets} from '../../../../src/domain/usecases/training-sheet/get-today-training-sheets';
import {correctTrainingSheet} from '../../../__mocks__/gym.mock';

describe('GetTodayTrainingSheets', () => {
  let sut: GetTodayTrainingSheets;
  let gymGateway: MockProxy<GetTodayTrainingSheetsGateway>;

  beforeEach(() => {
    gymGateway = mock();
    gymGateway.getTodayTrainingSheets.mockResolvedValue([correctTrainingSheet]);

    sut = new GetTodayTrainingSheets(gymGateway);
  });

  test('should return all training sheets of today', async () => {
    const result = await sut.execute();

    expect(result).toEqual([
      {
        id: correctTrainingSheet.id,
        student: {
          id: correctTrainingSheet.student.id,
          name: correctTrainingSheet.student.name,
          paymentStatus: correctTrainingSheet.student.paymentStatus.status,
          unpaidDays: correctTrainingSheet.student.paymentStatus.unpaidDays,
        },
        todayWorkout: correctTrainingSheet.todayWorkout,
      },
    ]);
  });
});
