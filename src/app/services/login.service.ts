import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { EmployeeModel } from "../models/employees.model";

@Injectable({
    "providedIn": "root"
})

export class LoginService{

    private allEmployees =[
        {
            "id": "",
            "images": [],
            "password" : "password1",
            "email": "jeff@mail.com",
            "messages": "we love it here",
            

        }
    ]
  
    constructor(private _httpClient: HttpClient){}


    public addEmployees(employeeModel: EmployeeModel): Observable<EmployeeModel>{{
        return this._httpClient.post<EmployeeModel>('http://localhost:3000/united/login', employeeModel);
        
    }}

    public getEmployees(): Observable<EmployeeModel[]> {
        return this._httpClient.get<EmployeeModel[]>('https://localhost:3000/untied/login');}

      
    // public recentForms(): any[] {

    // }
}
