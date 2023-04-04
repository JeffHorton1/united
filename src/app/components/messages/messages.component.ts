import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { MachineModel } from 'src/app/models/machine.model';
import { MessageModel } from 'src/app/models/message.model';
import { Observable } from 'rxjs';
import { FormService } from 'src/app/services/form.service';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  

})

@Injectable({
  providedIn: 'root'
})

export class MessagesComponent implements OnInit {
  form: FormGroup;

  items = this._formService.getForms;


  submitted = false;

  messages: MessageModel = 
  {
    _id: "",
    messages: [""]
  }
  


  constructor(private _formService: FormService,private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      messages: "",

    })
  }



   
  submitForm()
  {
      if(this.form.valid){
        const formData: FormService  = this.form.value;
        this._formService.submitForm(formData).subscribe(
          res=>{
            console.log('Form submitted successfully');
            this.form.reset();
          },
          err=>{
            console.log('Error')
          }
        )
      }
      
  };


  // submitForm(form: NgForm){
  //   if(form.invalid){
  //     console.log("Error, the form can not be submitted !")
  //   }
  //   console.log(form.value)};
    

  ngOnInit(){}


}
