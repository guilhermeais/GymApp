import {faker} from '@faker-js/faker';
import {Student} from '../../src/domain/entities/student';
import {correctUserStudent} from './user.mock';
import {CreateStudent} from '../../src/domain/usecases/student/create-student';

export const correctCreateStudentRequest: CreateStudent.Request = {
  birthDate: new Date(),
  name: faker.person.fullName(),
  cpf: '39283956028',
  email: faker.internet.email(),
  phoneNumber: '+5516993299116',
};

export const correctStudent = Student.create({
  birthDate: new Date(),
  name: faker.person.fullName(),
  cpf: '39283956028',
  email: faker.internet.email(),
  phoneNumber: '+5516993299116',
  user: correctUserStudent,
});
