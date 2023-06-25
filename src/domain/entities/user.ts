import {UserRoles} from './enums/user-roles';

export class User {
  private readonly props: UserProps;

  private constructor(props: UserProps) {
    this.props = props;
  }

  static create(user: UserProps) {
    return new User(user);
  }

  toJSON(): UserProps {
    return {
      ...this.props,
    };
  }
}

export type UserProps = {
  id?: string;
  email?: string;
  name: string;
  photoUrl?: string;
  roles: UserRoles[];
};
