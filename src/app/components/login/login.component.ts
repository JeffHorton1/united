import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { FormsComponent } from '../forms/forms.component';
import { EmployeeModel } from 'src/app/models/employees.model';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {  
  

  
  
    //  ngOnInit(value: any ): void{
  
    
   
    constructor(private _loginService: LoginService){}
    
  ngOnInit(): void {
    
  }
  //   }  const userName = value.userName();
  //   const email = value.email();
  //   const password = value.password();

  //  const employees:EmployeeModel= new value();
  //     employees.userName = value.userName;
  //     employees.email = value.email;
  //     employees.password = value.password;
  //     return this._loginService.addEmployees(value)  
  
  addEmployees(){
    
  }

  // a(newUser: User): Observable<User> {
  //   const id = uuidv4(); // generate a UUID
  //   newUser._id = id;
  //   return this.http.post<User>(`${this.apiUrl}/users`, newUser).pipe(
  //     catchError(this.handleError)
  //   );

  myform(value: any): Observable<EmployeeModel>{
    console.log(value)
    const employees: EmployeeModel = new EmployeeModel;
    const employee = [];
    employees.email = value.email.append;
    employees.password = value.password;
    employees.userName = value.userName
    
    return this._loginService.addEmployees(new EmployeeModel);
  }

    // onSubmit(value: any): void<>{
    //   const results: value  
    //   public messages = value.messages;
    //   public userName= value.userName;
    //   public password = value.password;
    //   return value._loginService.myform(new EmployeeModel)};
    
  // employees: any[] = [];
  // signupObj: any= {
  //   userName: '',
  //   email: '',
  //   password: '',
  // }

  // loginObj: any= {
  //   userName: '',
  //   password: '',
  // }
  // data: any;
  // todaydate: any;
  // formdata: any;
  // email: any;
  // componentproperty: any;
  // FormGroup: any[]=[];
  // myservice: any;

onSignUp(){

}

onRegister(){
  
}
  
}

