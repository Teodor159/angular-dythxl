import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1> Nová  {{name}}!</h1>`,
  styles: [`h1 { font-family: arial;}`]
})
export class HelloComponent  {
  @Input() name: string;
}
