import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: ''
  
  
})
export class AppComponent {
  title = 'united';
  
    

  constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.http.get('/users').subscribe((data: any[]) => {
  //     this.users = data;
  //   });
  // }
}
