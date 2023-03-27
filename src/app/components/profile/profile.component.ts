import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string = "";
  imageUrl: string = "https://via.placeholder.com/150";
  email: string = "";
  phone: string = "";
  address: string = "";

  ngOnInit() {

  }
}
