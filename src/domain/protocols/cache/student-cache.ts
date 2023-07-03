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
