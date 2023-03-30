import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm, FormsModule,FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgLocalization } from '@angular/common';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  template: ' <app-forms [data]="parentData"></app-forms>',
  styleUrls: ['./forms.component.css'],
 

})

// @NgModule({

// })


export class FormsComponent implements AfterViewInit {
  trigger: any;
  nextWebcam: any;
  @ViewChild('video') video: ElementRef | undefined;
  @ViewChild('canvas') canvas: ElementRef | undefined;
  @Output() getPicture = new EventEmitter<WebcamImage>();

  showWebcam = true;
  isCameraExist = true;
 
  errors: WebcamInitError[] = [];
  webcamImage: WebcamImage | undefined;
  

  

  // webcam snapshot trigger
  // private trigger: Subject<void> = new Subject<void>();
  // private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  // @ViewChild('video')
  // public video!: ElementRef;

  // public ngAfterViewInit(): void {
  //   if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //     navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  //       this.video.nativeElement.srcObject = stream;
  //       this.video.nativeElement.play();
  //     });
  //   }
 

  constructor(
    
  ) {}

  
 

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
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });
  }

  takeSnapshot(): void {
    this.trigger.next();
  }

  onOffWebCame() {
    this.showWebcam = !this.showWebcam;
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  changeWebCame(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId);
  }

  handleImage(webcamImage: WebcamImage) {
    this.getPicture.emit(webcamImage);
    this.showWebcam = false;
  }
  
  // handleImage(webcamImage: WebcamImage) {
  //   this.webcamImage = webcamImage;
  // }

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

  
  
  async ngAfterViewInit() {
    await this.setupCamera();
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
}



