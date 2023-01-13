import { Component, Input } from '@angular/core';
import { Conference } from 'src/app/core/models/conference.model';

@Component({
  selector: 'app-conference-item',
  templateUrl: './conference-item.component.html',
  styleUrls: ['./conference-item.component.scss']
})
export class ConferenceItemComponent {

  @Input() public conference!: Conference;
  @Input() public nameColor: string = '#000000';

  protected getProgressColorClass(): string {
    return this.conference.reservedSeats === this.conference.totalSeats
      ? 'is-danger'
      : this.conference.reservedSeats >= this.conference.totalSeats * 0.9
        ? 'is-warning'
        : 'is-success';
  }
}
