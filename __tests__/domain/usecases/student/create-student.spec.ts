import {MockProxy, mock} from 'jest-mock-extended';
import {CreateStudentInCache} from '../../../../src/domain/protocols/cache';
import {
  CreateStudentGateway,
  UserHasNetworkGateway,
} from '../../../../src/domain/protocols/gateways';
import {CreateStudent} from '../../../../src/domain/usecases/student/create-student';
import {correctCreateStudentRequest} from '../../../__mocks__/student.mock';
import {Student} from '../../../../src/domain/entities/student';

describe('CreateStudent', () => {
  let sut: CreateStudent;
  let studentGateway: MockProxy<CreateStudentGateway>;
  let networkGateway: MockProxy<UserHasNetworkGateway>;
  let studentCache: MockProxy<CreateStudentInCache>;

  beforeEach(() => {
    networkGateway = mock();
    networkGateway.isConnected.mockResolvedValue(true);
    studentCache = mock();
    studentGateway = mock();

    sut = new CreateStudent(studentGateway, networkGateway, studentCache);
  });

  it('should create an student in cache if user does not have connection with internet', async () => {
    networkGateway.isConnected.mockResolvedValueOnce(false);
    const {studentId} = await sut.execute(correctCreateStudentRequest);

    expect(studentId).toEqual(expect.any(String));

    expect(studentCache.create).toHaveBeenCalledTimes(1);
    expect(studentCache.create).toHaveBeenCalledWith(expect.any(Student));

    expect(studentGateway.create).not.toHaveBeenCalled();
  });

  it('should create an student', async () => {
    const {studentId} = await sut.execute(correctCreateStudentRequest);

    expect(studentId).toEqual(expect.any(String));

    expect(studentGateway.create).toHaveBeenCalledTimes(1);
    expect(studentGateway.create).toHaveBeenCalledWith(expect.any(Student));

    expect(studentCache.create).not.toHaveBeenCalled();
  });
});
