import {Student} from '../../entities/student';
import {CreateStudentInCache} from '../../protocols/cache';
import {
  CreateStudentGateway,
  UserHasNetworkGateway,
} from '../../protocols/gateways';

export class CreateStudent {
  constructor(
    private readonly studentGateway: CreateStudentGateway,
    private readonly networkGateway: UserHasNetworkGateway,
    private readonly studentCache: CreateStudentInCache,
  ) {}

  async execute(
    request: CreateStudent.Request,
  ): Promise<CreateStudent.Response> {
    const userIsConnected = await this.networkGateway.isConnected();
    const student = Student.create(request);
    if (!userIsConnected) {
      await this.studentCache.create(student);
    } else {
      await this.studentGateway.create(student);
    }

    return {
      studentId: student.id,
    };
  }
}

export namespace CreateStudent {
  export type Request = {
    name: string;
    birthDate: Date;
    phoneNumber?: string;
    cpf?: string;
    email?: string;
  };

  export type Response = {studentId: string};
}
