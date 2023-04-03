import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm, FormsModule,FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgLocalization } from '@angular/common';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { FormService } from 'src/app/services/form.service';
import { MachineModel } from 'src/app/models/machine.model';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  template: ' <app-forms [data]="parentData"></app-forms>',
  styleUrls: ['./forms.component.css'],
 

})



export class FormsComponent implements AfterViewInit {
  title = 'forms';
  

  constructor(private _formService: FormService ) {
    // fetch('/my-server-endpoint', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => {
    //   // handle response
    // })
    // .catch(error => {
    //   // handle error
    // });
  }

  
  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });
  }

  yoForm(value: any): Observable<MachineModel>{
    console.log(value)
    const machines: MachineModel = new MachineModel();
    
    const colors= "" || [];
    machines.machines = value.machine;
    machines.comments = value.comments;;
    machines.red = value.red;
    machines.green = value.green;
    machines.yellow = value.yellow;
    machines.avatar = value.avatar;
  
    // machines.images = value.upload;
    machines.images = value.images;
    return this._formService.addForm(new MachineModel);
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
