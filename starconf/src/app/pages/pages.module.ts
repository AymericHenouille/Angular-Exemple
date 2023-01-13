import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConferenceListComponent } from './home/components/conference-list/conference-list.component';
import { ConferenceItemComponent } from './home/components/conference-item/conference-item.component';
import { FormsModule } from '@angular/forms';
import { ConferenceComponent } from './conference/conference.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  HomeComponent,
  ConferenceListComponent,
  ConferenceItemComponent,
  ConferenceComponent
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class PagesModule { }
