import { Component, ElementRef, ViewChild } from '@angular/core';
import { conferences } from 'src/app/core/items/conference.item';
import { Conference } from 'src/app/core/models/conference.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('colorPicker')
  protected colorPicker!: ElementRef<HTMLInputElement>;

  protected conferences: Conference[] = conferences;
  protected selectedConference: Conference | undefined = undefined;
  protected nameColor: string = '#000000';

  protected toggleColorPicker() {
    this.colorPicker.nativeElement.click();
  }

  protected selectConference(conference: Conference) {
    this.selectedConference = conference;
  }

  protected goHome(): void {
    this.selectedConference = undefined;
  }
}
