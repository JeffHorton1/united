import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm, FormsModule,FormBuilder, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgLocalization } from '@angular/common';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { FormService } from 'src/app/services/form.service';
import { MachineModel } from 'src/app/models/machine.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  template: ' <app-forms [data]="parentData"></app-forms>',
  styleUrls: ['./forms.component.css'],
 

})

@Injectable({
  providedIn: 'root'
})

export class FormsComponent implements AfterViewInit {
  title = 'forms';
  form: FormGroup; 
  selectedValue = null;
  public employees: any;
  tickets: any[]=[];

  ticketObj: any= {
    _id:"",
    machines:'',
    comments: '',
    group: '',
    red: false,
    green: false,
    yellow: false,
    images: "",

  }


  constructor(private _formService: FormService, private http: HttpClient, private formBuilder: FormBuilder, private router: Router,private _loginService: LoginService ) {
    this.form = this.formBuilder.group({
      messages: "",
      

    });
    
    this.employees = _loginService.getUser()
  }

    yoForm(value: any): Observable<MachineModel>{
      // if(value.red == true){
      //   value.green && value.yellow == false;
      //   if(value.green == true){
      //     value.yellow && value.red == false;
      //     if(value.yellow == true){
      //       value.red && value.green == false;
      //     }
      //   }
      // }
    console.log(value);
    
    const machines: MachineModel = new MachineModel();
    machines.machines = value.machines;
    machines.comments = value.comments;
    machines.red = value.red;
    machines.green = value.green;
    machines.yellow = value.yellow;
    machines.avatar = value.avatar;
    machines.images = value.images;
    this.http.post('forms', MachineModel ). subscribe(
    (response: any) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/dashboard']);
    },
    (error) => {
      console.log(error);
    });
    return this._formService.addForm(new MachineModel);
    

    
    
  }

  submit(){
    this.tickets.push(this.ticketObj);
    localStorage.setItem('tickets', JSON.stringify(this.tickets));
    this.ticketObj = {
      _id:"",
    machines:'',
    comments: '',
    group: '',
    red: false,
    green: false,
    yellow: false,
    images: "",
    };
    this.router.navigate(['/dashboard'])
  }

  submitForm()
  {
      if(this.form.valid){
        const formData: FormService = this.form.value;
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
 
  onSubmit(form: NgForm){
    const machines = form.value.machines;
    const images = form.value.images;
    const yellow = form.value.yellow;
    const red = form.value.red;
    
    
  }
  
  ngOnInit(): void {
    
    
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });

    
  }

  
 

  
  @ViewChild('video') video: ElementRef | undefined;
  @ViewChild('canvas') canvas: ElementRef | undefined;
  @Output() getPicture = new EventEmitter<WebcamImage>();
 
  showWebcam = true;
  isCameraExist = true;
 
  errors: WebcamInitError[] = [];
  webcamImage: WebcamImage | undefined;
  

  

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

 

  

  




  

 

  onFilesDropped(files: File[]) {
    for (const file of files) {
      // Do something with the file


    }
  }
  

  takeSnapshot(): void {
    this.trigger.next();
  }

  onOffWebCame() {
    this.showWebcam = this.showWebcam;
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  changeWebCame(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId);
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.getPicture.emit(webcamImage);
    this.showWebcam = false;
  }


  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
  
  
  WIDTH = 640;
  HEIGHT = 480;

  imageCaptures: string[] = [];
  error: any;
  isCaptured: boolean = false;

  
  
  async ngAfterViewInit(this: any){
   await this.setupCamera()
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // const video = this.video
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.nativeElement.srcObject = stream;
            this.video.nativeElement.play();})}
  }
     
    

  async setupCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (stream && this.video) {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          this.error = null;
        } else {
          this.error = 'Sorry camera device is not exist or not working';
        }
      } catch (error) {
        this.error = error;
      }
    }
  }

  capture() {
    this.drawImageToCanvas(this.video?.nativeElement);
    this.imageCaptures.push(this.canvas?.nativeElement.toDataURL('image/png'));
    this.isCaptured = true;
  }
  

  removeCurrent() {
    this.isCaptured = false;
  }

  setPhoto(idx: number) {
    this.isCaptured = true;
    var image = new Image();
    image.src = this.imageCaptures[idx];
    this.drawImageToCanvas(image);
  }

  drawImageToCanvas(image: any) {
    this.canvas?.nativeElement
      .getContext('2d')
      .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  }

  showImage(_formService: FormService) {
   new Image 
}

}
