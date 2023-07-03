import {Student} from '../../entities/student';

export interface CreateStudentGateway {
  create(
    request: CreateStudentGateway.Request,
  ): Promise<CreateStudentGateway.Result>;
}

export namespace CreateStudentGateway {
  export type Request = Student;
  export type Result = {
    id: string;
  };
}
