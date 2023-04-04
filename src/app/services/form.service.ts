import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { MachineModel } from "../models/machine.model";
import { FormGroup } from "@angular/forms";
import axios from "axios";

@Injectable({
    "providedIn": "root"
})

export class FormService{
    
    private apiUrl = 'http://localhost:3000/united/messages';

     myForm =[
        {
            "id": "",
            "yellow": false,
            "green": true,
            "red": false,
            "images": "",
            "machines": "",
            "comments": "",
            "messages": "",

        }
    ]
    constructor(private _httpClient: HttpClient){}

    submitForm(_formService: FormService): Observable<any> {
        return this._httpClient.post(this.apiUrl,  _formService);
      }

    

   
    public addForm(machineModel: MachineModel): Observable<MachineModel>{{
        return this._httpClient.post<MachineModel>('http://localhost:3000/united/forms', MachineModel);
        
    }}

    public getForms(machineModel: MachineModel): Observable<MachineModel[]> {
        return this._httpClient.get<MachineModel[]>('http://localhost:3000/united/forms')};

    // public recentForms(): any[] {

    // }
}
