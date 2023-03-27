import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any= {
    userName: '',
    email: '',
    password: '',
  }

  loginObj: any= {
    userName: '',
    password: '',
  }
  data: any;
  todaydate: any;
  formdata: any;
  emailid: any;
  componentproperty: any;
  
  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
//   ngOnInit() {
  
//     componentproperty;
//     constructor(private myservice: MyserviceService){ }
//     ngOnInit() {
//        this.todaydate = this.myservice.showTodayDate();
//        this.formdata = new FormGroup({
//           emailid: new FormControl("angular@gmail.com"),
//           passwd: new FormControl("abcd1234")
//        });
//     }

//    }
//  } 
  onSubmit(data: { emailid: any; }) {this.emailid = data.emailid};
}
