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

export interface ListStudentsGateway {
  list(
    request: ListStudentsGateway.Request,
  ): Promise<ListStudentsGateway.Result>;
}

export namespace ListStudentsGateway {
  export type Request = Partial<{
    name?: string;
    cpf?: string;
    pageSize?: number;
    pageNumber?: number;
  }>;
  export type Result = {
    students: Array<Student>;
    pagesCount: number;
    pageSize: number;
  };
}
