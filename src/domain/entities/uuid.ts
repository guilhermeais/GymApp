import uuid from 'react-native-uuid';

export class UUID {
  static randomUUID(): string {
    return uuid.v4().toString();
  }
}
