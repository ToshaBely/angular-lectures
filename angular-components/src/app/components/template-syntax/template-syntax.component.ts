import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent {
  userName = 'Jeorge';

  @ViewChild('userInput') userInputRef: ElementRef;

  onKeyUp(event: KeyboardEvent) {
    console.log(event);
  }
}
