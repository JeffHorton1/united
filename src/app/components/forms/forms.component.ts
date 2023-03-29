import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule,FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgLocalization } from '@angular/common';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],

})

// @NgModule({

// })


export class FormsComponent implements OnInit {

 

  // constructor(
  //   private cartService: CartService,
  //   private formBuilder: FormBuilder,
  // ) {}

  
  title = 'client';

  images = "";

  selectMachine!: number;

  machines = [
    { id: 1, name: 'Kiosk' },
    { id: 2, name: 'Baggage' },
    { id: 3, name: 'Gate' },
    { id: 4, name: 'PSA Line' },
  ];

  myText = '';

  onSubmit(form: NgForm) {
    const machine = form.value.machine;
    const comments = form.value.comments;
    const red = form.value.red;
    const green = form.value.green;
    const yellow = form.value.yellow;
    const images = form.value.images;

  }

  onFilesDropped(files: File[]) {
    for (const file of files) {
      // Do something with the file


    }
  }

  ngOnInit(): void {

  }
}