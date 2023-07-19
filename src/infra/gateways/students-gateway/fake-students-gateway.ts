import {faker} from '@faker-js/faker';
import {Student} from '../../../domain/entities/student';
import {
  CreateStudentGateway,
  ListStudentsGateway,
} from '../../../domain/protocols/gateways';
import {PaymentStatus} from '../../../domain/entities/payment-status';
import {PaymentStatusEnum} from '../../../domain/entities/enums/payment-status';
import {Email} from '../../../domain/entities/email';

async function sleep(interval: number) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
}

export class FakeStudentsGateway
  implements CreateStudentGateway, ListStudentsGateway
{
  private readonly students: Student[] = [
    Student.create({
      name: faker.person.fullName(),
      birthDate: faker.date.past(),
      email: new Email(faker.internet.email()),
      paymentStatus: new PaymentStatus({
        status: PaymentStatusEnum.PAID,
      }),
    }),
  ];

  async list(
    request: Partial<{
      name?: string;
      cpf?: string;
      pageSize?: number;
      pageNumber?: number;
    }>,
  ): Promise<ListStudentsGateway.Result> {
    request.pageNumber =
      request.pageNumber !== undefined ? request.pageNumber : 0;
    await sleep(650);

    return {
      pagesCount: 100,
      pageSize: request.pageSize,
      students: this.students,
    };
  }

  async create(request: Student): Promise<CreateStudentGateway.Result> {
    await sleep(650);
    const studentProps = request.toJSON();
    studentProps.paymentStatus = studentProps.paymentStatus
      ? studentProps.paymentStatus
      : new PaymentStatus({
          status: PaymentStatusEnum.PAID,
        });
    this.students.push(
      Student.create({
        ...studentProps,
      }),
    );
    return {
      id: request.id,
    };
  }
}
