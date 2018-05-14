import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IText } from './itext';

@Component({
  selector: 'texti',
  template: `
    <p class="thetxt">
	{{texti.make}} 
	<button (click)="delete(car)">Delete</button>
    </p>
  `,
  styles: []
})
export class ITextComponent {
	@Input('theText') texti: ICar;
	@Output() textDelete = new EventEmitter();
	delete(texti: IText) {
		this.textDelete.emit(texti)
	}
}
