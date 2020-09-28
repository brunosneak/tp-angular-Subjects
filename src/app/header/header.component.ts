import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Input() public navStatus: boolean = true;
  @Output() public closeMyNav: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  closed() {
    console.log(this.navStatus);
    this.closeMyNav.emit(this.navStatus);
  }

  ngOnInit(): void {}
}
