import {Email} from '../../../src/domain/entities/email';

describe('Email', () => {
  test('should validate if email is valid whe email is invalid', () => {
    const incorrectEmail = 'invalidemail';
    expect(new Email(incorrectEmail).isValid).toBe(false);
  });

  test('should validate if email is valid whe email is valid', () => {
    const correctEmail = 'validmail@mail.com';
    expect(new Email(correctEmail).isValid).toBe(true);
  });

  test('should return the email', () => {
    const correctEmail = 'validmail@mail.com';
    const email = new Email(correctEmail);
    expect(email.value).toBe(correctEmail);
    expect(email.toString()).toBe(correctEmail);
  });
});
