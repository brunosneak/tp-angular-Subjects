import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tp';
  navStatus = false;

  showData() {
    this.navStatus = !this.navStatus;
    console.log(this.navStatus);
  }

  closeMyNav() {
    this.navStatus = true;
  }
}
