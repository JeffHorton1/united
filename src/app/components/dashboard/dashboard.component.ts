import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { LoginService } from 'src/app/services/login.service';
import { EmployeeModel } from 'src/app/models/employees.model';
import { MachineModel } from 'src/app/models/machine.model';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  template: `

`

})
export class DashboardComponent implements OnInit {
  public user: any;

 
 forms: MachineModel[] = [];

  constructor(private _formService: FormService, private _loginService: LoginService) { 
    this.user = _loginService.getUser();
  }


  ngOnInit() {
 
    // this._formService.getForms().subscribe(forms => {
    //   this.forms = forms;
    // });
    const unitedOhare = { lat: 42.345573, lng: -71.098326 };


    async function initMap(): Promise<void> {
      //@ts-ignore

      var { Map } = await google.maps.importLibrary("maps");
      var map = new Map(document.getElementById("map") as HTMLElement, {
        center: unitedOhare,
        map: google.maps.Map
      });

    }


  }
  ;


  userName: string = "";
  images: string = "";
  display: any;
  center: google.maps.LatLngLiteral = { lat: 41.97847198108121, lng: -87.90673872852392 };
  zoom = 19;



  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.display = event.latLng.toJSON()
  }




  initMap() {
    this.ngOnInit
  };

}





  //   let map: google.maps.Map;
  //   //@ts-ignore
  //  const { Map } = google.maps.importLibrary("maps");
  //  map = new Map(document.getElementById("map") as HTMLElement, {
  //   center: { lat: -34.397, lng: 150.644 },
  //   zoom: 8,

