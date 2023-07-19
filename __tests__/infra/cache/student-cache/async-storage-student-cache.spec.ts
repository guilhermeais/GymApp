import {AsyncStorageStudentCache} from '../../../../src/infra/cache/student-cache/async-storage-student-cache';
import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {
  correctStudent,
  correctStudentProps,
} from '../../../__mocks__/student.mock';
import {Student, StudentProps} from '../../../../src/domain/entities/student';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
describe('AsyncStorageStudentCache', () => {
  let sut: AsyncStorageStudentCache;

  beforeEach(() => {
    sut = new AsyncStorageStudentCache();
  });

  afterEach(async () => {
    await AsyncStorageMock.clear();
  });

  describe('list()', () => {
    it('should return empty array if has any cached students', async () => {
      const result = await sut.list();
      expect(result.length).toEqual(0);
    });

    it('should list all cached students', async () => {
      await AsyncStorageMock.setItem(
        'students',
        JSON.stringify([correctStudentProps]),
      );

      const result = await sut.list();
      const expectedStudent = Student.create(correctStudentProps);
      expect(result.length).toEqual(1);
      expect(result[0].id).toEqual(expectedStudent.id);
      expect(result[0].name).toEqual(expectedStudent.name);
    });

    it('should list all cached students with exactly name filter', async () => {
      const mockedStudents: StudentProps[] = [
        {
          ...correctStudentProps,
          name: 'João Pedro',
        },
        {
          ...correctStudentProps,
          name: 'Guilherme Teixeira',
        },
      ];
      AsyncStorageMock.setItem('students', JSON.stringify(mockedStudents));

      const result = await sut.list({
        name: 'Guilherme Teixeira',
      });
      const expectedStudent = Student.create(mockedStudents[1]);
      expect(result.length).toEqual(1);
      expect(result[0].id).toEqual(expectedStudent.id);
      expect(result[0].name).toEqual(expectedStudent.name);
    });

    it('should list all cached students with partial name filter', async () => {
      const mockedStudents: StudentProps[] = [
        {
          ...correctStudentProps,
          name: 'João Pedro',
        },
        {
          ...correctStudentProps,
          name: 'Guilherme Teixeira',
        },
      ];
      AsyncStorageMock.setItem('students', JSON.stringify(mockedStudents));

      const result = await sut.list({
        name: 'jo',
      });
      const expectedStudent = Student.create(mockedStudents[0]);
      expect(result.length).toEqual(1);
      expect(result[0].id).toEqual(expectedStudent.id);
      expect(result[0].name).toEqual(expectedStudent.name);
    });
  });

  describe('create()', () => {
    it('should create an student on students cache if students is empty', async () => {
      await sut.create(correctStudent);
      const saveStudents = await AsyncStorageMock.getItem('students');

      expect(saveStudents).toBeDefined();
      const parsedStudents = JSON.parse(saveStudents) as StudentProps[];
      const studentProps = correctStudent.toJSON();
      const expectedResult = {
        ...studentProps,
        birthDate: studentProps.birthDate.toJSON(),
      };

      expect(parsedStudents.length).toEqual(1);
      expect(parsedStudents[0]).toEqual(expectedResult);
    });

    it('should add an student on students cache if students is not empty', async () => {
      await AsyncStorageMock.setItem(
        'students',
        JSON.stringify([correctStudentProps]),
      );

      const otherStudentProps = {
        ...correctStudentProps,
        id: 'other-id',
        name: 'other-name',
      };
      const otherStudent = Student.create(otherStudentProps);
      await sut.create(otherStudent);
      const saveStudents = await AsyncStorageMock.getItem('students');

      expect(saveStudents).toBeDefined();
      const parsedStudents = JSON.parse(saveStudents) as StudentProps[];
      const expectedResult = {
        ...otherStudentProps,
        birthDate: otherStudentProps.birthDate.toJSON(),
      };

      expect(parsedStudents.length).toEqual(2);
      expect(parsedStudents[1]).toEqual(expectedResult);
    });
  });
});
