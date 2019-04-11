import { IRepository } from "./IRepository";

export class CustomerRepository implements IRepository{
    Insert(): Promise<>{

        return Promise.resolve();
    }
    FindbyId(): Promise<T>;
    Update(): Promise<T>;
    FindAll(): Promise<Array<T>>;
}