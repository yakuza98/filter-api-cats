export class GetBreedsAction {
  static readonly type = '[GetBreeds Action] Get Breeds';
}
export class SetPaginationAction {
  static readonly type = '[SetPagination Action] SetPagination';
  constructor(private pagination: any) {
  }
}
export class GetSelectedAction {
  static readonly type = '[GetSelected Action] GetSelected';
  constructor(private query: any) {
  }
}
