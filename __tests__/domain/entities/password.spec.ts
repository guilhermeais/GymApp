import {Password} from '../../../src/domain/entities/password';

describe('Password', () => {
  test('should validate an invalid password', () => {
    const invalidPassword = 'invalid password';
    expect(new Password(invalidPassword).isValid).toEqual(false);
  });

  test('should give details of the invalid password when password has no upper case', () => {
    const invalidPassword = 'nouppercase';
    expect(new Password(invalidPassword).validationObject.hasUpperCase).toEqual(
      false,
    );
  });

  test('should give details of the invalid password when password has no lower case', () => {
    const invalidPassword = 'NOWLOWERCASE';
    expect(new Password(invalidPassword).validationObject.hasLowerCase).toEqual(
      false,
    );
  });

  test('should give details of the invalid password when password has no number', () => {
    const invalidPassword = 'noNumber';
    expect(new Password(invalidPassword).validationObject.hasNumber).toEqual(
      false,
    );
  });

  test('should give details of the invalid password when password has invalid length', () => {
    const invalidPassword = 'a';
    expect(
      new Password(invalidPassword).validationObject.isLengthCorrect,
    ).toEqual(false);
  });

  test('should give details of the invalid password when password has no upperCase', () => {
    const invalidPassword = 'NOWLOWERCASE';
    expect(new Password(invalidPassword).validationObject.hasLowerCase).toEqual(
      false,
    );
  });

  test('should validate an correct password', () => {
    const correctPassword = 'SomeValid_Password1';
    expect(new Password(correctPassword).isValid).toEqual(true);
    expect(new Password(correctPassword).validationObject.hasLowerCase).toEqual(
      true,
    );
    expect(new Password(correctPassword).validationObject.hasUpperCase).toEqual(
      true,
    );
    expect(
      new Password(correctPassword).validationObject.isLengthCorrect,
    ).toEqual(true);

    expect(new Password(correctPassword).validationObject.hasNumber).toEqual(
      true,
    );
  });
  test('should return the value of the password', () => {
    const correctPassword = 'SomeValid_Password1';
    expect(new Password(correctPassword).value).toEqual(correctPassword);
    expect(new Password(correctPassword).toString()).toEqual(correctPassword);
  });
});
