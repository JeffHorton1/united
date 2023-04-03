import { EmployeeModel } from "./employees.model";

    const formData = new FormData();
    const file = new Blob(['hello world'], { type: 'text/plain' });
    formData.append('file', file, '');

    export class MachineModel   {
    // [x: string]: any;
    public _id: string="";
    public images: Blob[]=[];
    public machines: string="";
    public comments: string="";
    public upload: Blob[] = [];; 
    public red: boolean = false;
    public green: boolean = true;
    public yellow: boolean = false;
    // public video: string = "";
    public avatar: Blob[]=[];
    private _formService: any;
    


}