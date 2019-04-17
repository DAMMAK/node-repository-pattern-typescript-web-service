export interface IRepository<T> {
  Insert(item: T): Promise<T>;
  FindbyId(): Promise<T>;
  Update(): Promise<T>;
  FindAll(): Promise<Array<T>>;
}
