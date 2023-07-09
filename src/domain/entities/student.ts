import {BaseEntity, BaseEntityProps} from './base-entity';
import {PaymentStatus} from './payment-status';
import {User, UserProps} from './user';

export class Student extends BaseEntity<StudentProps> {
  private readonly _user: User;
  private constructor(props: BaseEntityProps<StudentProps>) {
    super(props);
    this._user = User.create(props.user);
  }

  get id() {
    return this.props.id;
  }

  get user() {
    return this._user;
  }

  get name() {
    return this.props.name;
  }

  get cpf() {
    return this.props.cpf;
  }

  get paymentStatus() {
    return this.props.paymentStatus;
  }

  toJSON(): StudentProps {
    return {
      ...this.props,
    };
  }

  static create(props: BaseEntityProps<StudentProps>) {
    return new Student(props);
  }
}

export type StudentProps = {
  name: string;
  birthDate: Date;
  phoneNumber?: string;
  cpf?: string;
  email?: string;
  user?: UserProps;
  paymentStatus: PaymentStatus;
};
