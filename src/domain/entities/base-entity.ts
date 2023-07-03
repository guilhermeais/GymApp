import {UUID} from './uuid';

export class BaseEntity<T = any> {
  protected readonly props: BaseEntityProps<T>;
  constructor(props: BaseEntityProps<T>) {
    props.id = props.id || UUID.randomUUID();
    this.props = props;
  }
}

export type BaseEntityProps<T> = {
  id?: string;
} & T;
