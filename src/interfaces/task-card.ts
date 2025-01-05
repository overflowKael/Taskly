export interface TaskInterface{
    name : string;
    description? : string;
    users? : string[];
    dueDate? : Date;
    status : string;
    priority? : number;
    tags? : string[];
    id : string;
    spaceEmptyVisible? : boolean;
}