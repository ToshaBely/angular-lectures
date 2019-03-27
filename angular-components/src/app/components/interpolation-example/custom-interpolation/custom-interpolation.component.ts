import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-interpolation',
  templateUrl: './custom-interpolation.component.html',
  styleUrls: ['./custom-interpolation.component.css'],
  interpolation: ['[[', ']]']
})
export class CustomInterpolationComponent {
  message = 'Custom interpolation example';
}
