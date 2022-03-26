import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() public toggleFilter = new EventEmitter();

  ngOnInit() {}

  toggleFilters() {
    this.toggleFilter.emit();
  }
}
