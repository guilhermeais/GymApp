import {Student, StudentProps} from '../../../domain/entities/student';
import {
  CreateStudentInCache,
  ListStudentsInCache,
} from '../../../domain/protocols/cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageStudentCache
  implements CreateStudentInCache, ListStudentsInCache
{
  async list(
    request: Partial<{name?: string; cpf?: string}> = {},
  ): Promise<ListStudentsInCache.Response> {
    const cachedStudents = await AsyncStorage.getItem('students');

    if (!cachedStudents) return [];

    const students = JSON.parse(cachedStudents) as StudentProps[];

    const mappedAndFilteredStudents: Student[] = [];

    for (const studentProp of students) {
      const student = Student.create(studentProp);
      if (!request.name && !request.cpf) {
        mappedAndFilteredStudents.push(student);
        break;
      }
      const nameMatch = request.name
        ? student.name.toLowerCase().includes(request.name.toLowerCase())
        : true;

      const cpfMatch = request.cpf ? student.cpf === request.cpf : true;

      if (cpfMatch && nameMatch) {
        mappedAndFilteredStudents.push(student);
        break;
      }
    }
    return mappedAndFilteredStudents;
  }

  async create(student: Student): Promise<void> {
    const cachedStudents = await AsyncStorage.getItem('students');

    if (cachedStudents) {
      const students = JSON.parse(cachedStudents) as StudentProps[];

      students.push(student.toJSON());

      await AsyncStorage.setItem('students', JSON.stringify(students));
      return;
    }

    await AsyncStorage.setItem('students', JSON.stringify([student.toJSON()]));
  }
}
