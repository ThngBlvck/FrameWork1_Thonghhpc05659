import { Component, Input} from '@angular/core';

@Component({
    selector: 'dialog',
    template:'<h1>Hello {{name}}!</h1>',
})
export class DialogComponent{
    @Input() name!: string;
}