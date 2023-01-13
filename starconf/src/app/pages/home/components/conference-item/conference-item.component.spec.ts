import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceItemComponent } from './conference-item.component';

describe('ConferenceItemComponent', () => {
  let component: ConferenceItemComponent;
  let fixture: ComponentFixture<ConferenceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferenceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
