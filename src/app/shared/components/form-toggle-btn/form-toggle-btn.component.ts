import { Component, Input } from '@angular/core';

@Component({
  selector: 'ytube-client-form-toggle-btn',
  templateUrl: './form-toggle-btn.component.html',
  styleUrls: ['./form-toggle-btn.component.scss'],
})
export class FormToggleBtnComponent {
  @Input() isVisible = false;
}
