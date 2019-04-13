import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router) {}

  ngOnInit() {
    // this.router.events.subscribe( event => console.log(event.__proto__.constructor.name) );
  }

  public goToUserPage() {
    this.router.navigate(['user', '456']);
  }
}
