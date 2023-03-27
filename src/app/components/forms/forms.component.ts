import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],

})
export class FormsComponent {
  title = 'client';

  

  selectMachine!: number;

    machines = [
        { id: 1, name: 'Kiosk' },
        { id: 2, name: 'Baggage' },
        { id: 3, name: 'Gate' },
        { id: 4, name: 'PSA Line' },
    ];

    myText= '';

    onFilesDropped(files: File[] ) {
      for (const file of files) {
        // Do something with the file
        
        
      } }
}