import {BaseEntity} from './base-entity';
import {User} from './user';

export class Student extends BaseEntity<StudentProps> {
  private constructor(props: StudentProps) {
    super(props);
  }

  get id() {
    return this.props.id;
  }

  static create(props: StudentProps) {
    return new Student(props);
  }
}

export type StudentProps = {
  name: string;
  birthDate: Date;
  phoneNumber?: string;
  cpf?: string;
  email?: string;
  user?: User;
};
