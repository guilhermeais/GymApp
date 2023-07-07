import {Student} from '../../../domain/entities/student';
import {
  CreateStudentGateway,
  ListStudentsGateway,
} from '../../../domain/protocols/gateways';

async function sleep(interval: number) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
}

export class FakeStudentsGateway
  implements CreateStudentGateway, ListStudentsGateway
{
  private readonly students: Student[];

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

    const totalPages = Math.ceil(this.students.length / request.pageSize);
    const currentPageStudents = [];

    const initialIndex = request.pageNumber * request.pageSize;
    for (let i = initialIndex; i < request.pageSize; i++) {
      currentPageStudents.push(this.students[i]);
    }

    return {
      pagesCount: totalPages,
      pageSize: request.pageSize,
      students: currentPageStudents,
    };
  }

  async create(request: Student): Promise<CreateStudentGateway.Result> {
    await sleep(650);
    this.students.push(request);
    return {
      id: request.id,
    };
  }
}
