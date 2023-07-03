import {faker} from '@faker-js/faker';
import {User, UserProps} from '../../src/domain/entities/user';
import {UserRoles} from '../../src/domain/entities/enums/user-roles';

export const correctUserTrainerAdminProps: UserProps = {
  name: faker.string.uuid(),
  roles: [UserRoles.TRAINER_ADMIN],
};

export const correctUserTrainerAdmin: User = User.create(
  correctUserTrainerAdminProps,
);

export const correctUserStudentProps: UserProps = {
  name: faker.string.uuid(),
  roles: [UserRoles.STUDENT],
};

export const correctUserStudent: User = User.create(correctUserStudentProps);
