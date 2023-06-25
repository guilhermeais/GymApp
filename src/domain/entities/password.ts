export class Password {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }

  get isValid(): boolean {
    return (
      this.isLengthValid() &&
      this.hasUpperCase() &&
      this.hasLowerCase() &&
      this.hasNumber()
    );
  }

  get validationObject(): PasswordValidation {
    return {
      isLengthCorrect: this.isLengthValid(),
      hasUpperCase: this.hasUpperCase(),
      hasLowerCase: this.hasLowerCase(),
      hasNumber: this.hasNumber(),
    };
  }

  get errorMessages(): string[] {
    const errors: string[] = [];

    if (!this.validationObject.isLengthCorrect) {
      errors.push('Senha deve conter ao menos 8 carácteres.');
    }

    if (!this.validationObject.hasUpperCase) {
      errors.push('Senha deve conter ao menos uma letra maiúscula.');
    }

    if (!this.validationObject.hasLowerCase) {
      errors.push('Senha deve conter ao menos uma letra minúscula.');
    }

    if (!this.validationObject.hasNumber) {
      errors.push('Senha deve conter ao menos um número.');
    }

    return errors;
  }

  get value(): string {
    return this.password;
  }

  set value(password: string) {
    this.password = password;
  }

  toString(): string {
    return this.password;
  }

  private isLengthValid(): boolean {
    return this.password.length >= 8;
  }

  private hasUpperCase(): boolean {
    return /[A-Z]/.test(this.password);
  }

  private hasLowerCase(): boolean {
    return /[a-z]/.test(this.password);
  }

  private hasNumber(): boolean {
    return /[0-9]/.test(this.password);
  }
}

export type PasswordValidation = {
  isLengthCorrect: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumber: boolean;
};
