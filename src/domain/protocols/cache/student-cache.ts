import {Student} from '../../entities/student';

export interface CreateStudentInCache {
  create(
    student: CreateStudentInCache.Request,
  ): Promise<CreateStudentInCache.Response>;
}

export namespace CreateStudentInCache {
  export type Request = Student;
  export type Response = void;
}

export interface ListStudentsInCache {
  list(
    request: ListStudentsInCache.Request,
  ): Promise<ListStudentsInCache.Response>;
}

export namespace ListStudentsInCache {
  export type Request = Partial<{
    name?: string;
  }>;
  export type Response = Student[];
}
