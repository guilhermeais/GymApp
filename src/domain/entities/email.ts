export class Email {
  private email: string;
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  constructor(email: string) {
    this.email = email;
  }

  get isValid(): boolean {
    return this.validateEmail(this.email);
  }

  get value(): string {
    return this.email;
  }

  set value(email: string) {
    this.email = email;
  }

  toString(): string {
    return this.email;
  }
}
