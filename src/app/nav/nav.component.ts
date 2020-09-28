import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}

  navStatus = false;

  @Output() public sendDataNav: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  toggleNav() {
    this.sendDataNav.emit(this.navStatus);
  }

  ngOnInit(): void {}
}
