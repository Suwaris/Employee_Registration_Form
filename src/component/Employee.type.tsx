export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    department: string;
} 

export enum PageEnum {
    list,
    add,
    edit,
}