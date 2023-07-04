import {MockProxy, mock} from 'jest-mock-extended';
import {ListStudentsInCache} from '../../../../src/domain/protocols/cache';
import {ListStudentsGateway} from '../../../../src/domain/protocols/gateways';
import {ListStudents} from '../../../../src/domain/usecases/student';
import {correctStudent} from '../../../__mocks__/student.mock';

describe('ListStudents', () => {
  let sut: ListStudents;
  let studentsGateway: MockProxy<ListStudentsGateway>;
  let studentsCache: MockProxy<ListStudentsInCache>;

  beforeEach(() => {
    studentsGateway = mock();
    studentsGateway.list.mockResolvedValue({
      pagesCount: 1,
      pageSize: 15,
      students: [],
    });
    studentsCache = mock();
    studentsCache.list.mockResolvedValue([]);

    sut = new ListStudents(studentsGateway, studentsCache);
  });

  test('should list all cached students', async () => {
    const mockedStudents = [correctStudent, correctStudent, correctStudent];
    studentsCache.list.mockResolvedValueOnce(mockedStudents);
    const response = await sut.execute({
      name: 'some-name',
      pageNumber: 1,
      pageSize: 15,
    });

    expect(studentsCache.list).toHaveBeenCalledWith({
      name: 'some-name',
      cpf: undefined,
    });

    expect(studentsGateway.list).toHaveBeenCalledWith({
      name: 'some-name',
      cpf: undefined,
      pageNumber: 1,
      pageSize: 15,
    });

    expect(response.cachedStudents).toEqual(mockedStudents);
    expect(response.pagesCount).toEqual(1);
    expect(response.pageSize).toEqual(15);
  });

  test('should list all non cached students', async () => {
    const mockedStudents = [correctStudent, correctStudent, correctStudent];
    const mockedResult = {
      students: mockedStudents,
      pageSize: 15,
      pagesCount: 2,
    };
    studentsGateway.list.mockResolvedValueOnce(mockedResult);
    const response = await sut.execute({
      name: 'some-name',
      pageNumber: 1,
      pageSize: 15,
    });

    expect(studentsCache.list).toHaveBeenCalledWith({
      name: 'some-name',
      cpf: undefined,
    });

    expect(studentsGateway.list).toHaveBeenCalledWith({
      name: 'some-name',
      cpf: undefined,
      pageNumber: 1,
      pageSize: 15,
    });

    expect(response.students).toEqual(mockedStudents);
    expect(response.pagesCount).toEqual(mockedResult.pagesCount);
    expect(response.pageSize).toEqual(mockedResult.pageSize);
  });
});
