import {BaseEntity, BaseEntityProps} from './base-entity';
import {Email} from './email';
import {PaymentStatus} from './payment-status';
import {User, UserProps} from './user';

export class Student extends BaseEntity<StudentProps> {
  private readonly _userAccess: User;
  private constructor(props: BaseEntityProps<StudentProps>) {
    super(props);
    this._userAccess = props.userAccess ? User.create(props.userAccess) : null;
  }

  get id() {
    return this.props.id;
  }

  get userAccess() {
    return this._userAccess;
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
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
  email?: Email;
  userAccess?: UserProps;
  paymentStatus?: PaymentStatus;
};
