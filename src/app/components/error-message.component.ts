import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-message-component',
  template: `
      <h2>{{ data.title }}</h2>
      <p>{{ data.cause }}</p>
  `
})
export class ErrorMessageComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  
}
