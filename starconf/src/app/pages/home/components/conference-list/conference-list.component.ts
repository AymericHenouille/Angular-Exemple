import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Conference } from 'src/app/core/models/conference.model';

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.scss']
})
export class ConferenceListComponent {

  @Input() public conferences: Conference[] = [];
  @Input() public nameColor: string = '#000000';

  @Output() public selectConference: EventEmitter<Conference> = new EventEmitter<Conference>();

  protected navigate(conference: Conference): void {
    this.selectConference.emit(conference);
  }
}
