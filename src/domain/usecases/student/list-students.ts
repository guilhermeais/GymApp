import {Student} from '../../entities/student';
import {ListStudentsInCache} from '../../protocols/cache';
import {ListStudentsGateway} from '../../protocols/gateways';

export class ListStudents {
  constructor(
    private readonly studentsGateway: ListStudentsGateway,
    private readonly studentsCache: ListStudentsInCache,
  ) {}
  async execute(
    params: ListStudents.Request = {},
  ): Promise<ListStudents.Response> {
    params.pageNumber =
      typeof params.pageNumber !== 'undefined' ? params.pageNumber : 0;
    params.pageSize = params.pageSize || 10;

    const cachedStudents = await this.studentsCache.list({
      cpf: params.cpf,
      name: params.name,
    });

    const nonCachedStudents = await this.studentsGateway.list(params);

    return {
      cachedStudents,
      students: nonCachedStudents.students,
      pagesCount: nonCachedStudents.pagesCount,
      pageSize: nonCachedStudents.pageSize,
    };
  }
}
export namespace ListStudents {
  export type Request = Partial<{
    name?: string;
    cpf?: string;
    pageSize?: number;
    pageNumber?: number;
  }>;

  export type Response = {
    students: Student[];
    cachedStudents: Student[];
    pagesCount: number;
    pageSize: number;
  };
}
