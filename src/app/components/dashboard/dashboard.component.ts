import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  template: `

`
  
})
export class DashboardComponent implements OnInit {
 
  
  constructor(){
    
  }

  
   ngOnInit(){
    
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
  

  userName: string="";
  images: string="";
  display: any;
  center: google.maps.LatLngLiteral = {lat: 41.97847198108121, lng: -87.90673872852392 } ;
  zoom= 19;


   
 moveMap(event: google.maps.MapMouseEvent){
    if(event.latLng!=null)
      this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent){
    if(event.latLng!=null)
    this.display = event.latLng.toJSON()
  }




initMap(){
  this.ngOnInit
};

}
  
  

  

  //   let map: google.maps.Map;
  //   //@ts-ignore
  //  const { Map } = google.maps.importLibrary("maps");
  //  map = new Map(document.getElementById("map") as HTMLElement, {
  //   center: { lat: -34.397, lng: 150.644 },
  //   zoom: 8,
 
