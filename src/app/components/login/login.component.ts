import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { FormsComponent } from '../forms/forms.component';
import { EmployeeModel } from 'src/app/models/employees.model';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as faceapi from 'face-api.js';
import { MachineModel } from 'src/app/models/machine.model';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {  
  employees: any[] = [];
  loginForm: FormGroup;
  signupObj: any= {
    userName: '',
    email: '',
    password: '',
  }

  loginObj: any= {
    userName: '',
    password: '',
  }
  // data: any;
  // todaydate: any;
  // formdata: any;
  // email: any;
  // componentproperty: any;
  // FormGroup: any[]=[];
  // myservice: any;
  
    //  ngOnInit(value: any ): void{
  
    onSignUp(){
  this.employees.push(this.signupObj);
  localStorage.setItem('employees', JSON.stringify(this.employees));
  this.signupObj = {
    userName: '',
    email: '',
    password: '',
  }
}

onLogin(){
  debugger
  const isEmployeeExist = this.employees.find
  (m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
  if(isEmployeeExist != undefined){
    alert("Employee Login Succesful !");
    this.router.navigate(['/dashboard']);
  }else{
    alert("Login Unsuccessful Please Try Again")
  }
}


   
    constructor(private fb: FormBuilder, private _loginService: LoginService, private http: HttpClient, private router: Router){
      this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    }
    
  ngOnInit(): void {
    const localData = localStorage.getItem('employees');
    if(localData != null){
      this.employees = JSON.parse(localData);
    }
    // this.loginForm = this.fb.group({
    //   userName: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
    
    
  }

  
  onSubmit() {
    var credentials = this.loginForm.value;
    this.http.post('/login', credentials).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  // onSubmit() {
  //   const credentials = this.loginForm.value;
  //   this.http.post('/api/login', credentials).pipe(
  //     tap((response: any) => {
  //       localStorage.setItem('token', response.token);
  //       this.router.navigate(['/dashboard']);
  //     }),
  //     catchError((error) => {
  //       console.error('Error occurred during login:', error);
  //       return throwError(error);
  //     })
  //   ).subscribe();
  // }
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

  // myform(value: any): Observable<EmployeeModel>{
  //   console.log(value)
  //   const employees: EmployeeModel = new EmployeeModel;
  //   const employee = [];
  //   employees.email = value.email.append;
  //   employees.password = value.password;
  //   employees.userName = value.userName
    
  //   return this._loginService.addEmployees(new EmployeeModel);
  // }

    




onRegister(){
  
}
  
}

