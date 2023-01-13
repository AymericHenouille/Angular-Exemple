import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Conference } from 'src/app/core/models/conference.model';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss']
})
export class ConferenceComponent {

  @Input() public conference!: Conference;

  @Output() public goHome: EventEmitter<void> = new EventEmitter<void>();
}
