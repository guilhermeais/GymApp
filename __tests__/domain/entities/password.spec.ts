import {Password} from '../../../src/domain/entities/password';

describe('Password', () => {
  test('should validate an invalid password', () => {
    const invalidPassword = 'invalid password';
    expect(new Password(invalidPassword).isValid).toEqual(false);
  });

  test('should give details of the invalid password when password has no upper case', () => {
    const invalidPassword = 'nouppercase';
    const password = new Password(invalidPassword);
    expect(password.validationObject.hasUpperCase).toEqual(false);
  });

  test('should give details of the invalid password when password has no lower case', () => {
    const invalidPassword = 'NOWLOWERCASE';
    const password = new Password(invalidPassword);
    expect(password.validationObject.hasLowerCase).toEqual(false);
    expect(password.errorMessages).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'Senha deve conter ao menos uma letra minúscula.',
        ),
      ]),
    );
  });

  test('should give details of the invalid password when password has no number', () => {
    const invalidPassword = 'noNumber';
    const password = new Password(invalidPassword);
    expect(password.validationObject.hasNumber).toEqual(false);
    expect(password.errorMessages).toEqual(
      expect.arrayContaining([
        expect.stringContaining('Senha deve conter ao menos um número.'),
      ]),
    );
  });

  test('should give details of the invalid password when password has invalid length', () => {
    const invalidPassword = 'a';
    const password = new Password(invalidPassword);
    expect(password.validationObject.isLengthCorrect).toEqual(false);
    expect(password.errorMessages).toEqual(
      expect.arrayContaining([
        expect.stringContaining('Senha deve conter ao menos 8 carácteres.'),
      ]),
    );
  });

  test('should give details of the invalid password when password has no upperCase', () => {
    const invalidPassword = 'nouppercase';
    const password = new Password(invalidPassword);
    expect(password.validationObject.hasUpperCase).toEqual(false);
    expect(password.errorMessages).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'Senha deve conter ao menos uma letra maiúscula.',
        ),
      ]),
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
