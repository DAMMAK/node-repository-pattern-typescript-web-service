export interface IRepository<T> {
  Insert(): Promise<T>;
  FindbyId(): Promise<T>;
  Update(): Promise<T>;
  FindAll(): Promise<Array<T>>;
}
