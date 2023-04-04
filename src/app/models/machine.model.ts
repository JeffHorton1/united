import { EmployeeModel } from "./employees.model";


    export class MachineModel   {
    // [x: string]: any;
    public _id: string="";
    public images: string="";
    public machines: string="";
    public comments: string="";
    public messages: string="";
    public upload: Blob[] = [];; 
    public red: boolean = false;
    public green: boolean = true;
    public yellow: boolean = false;
    // public video: string = "";
    public avatar: Blob[]=[];
    private _formService: any;
    


}