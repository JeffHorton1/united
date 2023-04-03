import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { MachineModel } from "../models/machine.model";

@Injectable({
    "providedIn": "root"
})

export class FormService{

    private allForms =[
        {
            "id": 1,
            "yellow": false,
            "green": true,
            "red": false,
            "images": [],
            "machines": "Kiosk",
            "comments": "we love it here",
            

        }
    ]
  FormService: any;
    constructor(private _httpClient: HttpClient){}


    public addForm(machineModel: MachineModel): Observable<MachineModel>{{
        return this._httpClient.post<MachineModel>('http://localhost:4200/api/forms', machineModel);
        
    }}

    public getForms(machineModel: MachineModel): Observable<MachineModel> {
        return this._httpClient.get<MachineModel>('https://localhost:4200/api/forms')};

      
    // public recentForms(): any[] {

    // }
}
