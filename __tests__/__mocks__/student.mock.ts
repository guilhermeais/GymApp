import {faker} from '@faker-js/faker';
import {Student, StudentProps} from '../../src/domain/entities/student';
import {correctUserStudentProps} from './user.mock';
import {CreateStudent} from '../../src/domain/usecases/student/create-student';

export const correctCreateStudentRequest: CreateStudent.Request = {
  birthDate: new Date(),
  name: faker.person.fullName(),
  cpf: '39283956028',
  email: faker.internet.email(),
  phoneNumber: '+5516993299116',
};

export const correctStudentProps: StudentProps = {
  birthDate: new Date(),
  name: faker.person.fullName(),
  cpf: '39283956028',
  email: faker.internet.email(),
  phoneNumber: '+5516993299116',
  user: correctUserStudentProps,
};

export const correctStudent = Student.create(correctStudentProps);
