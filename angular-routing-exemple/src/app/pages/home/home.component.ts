import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { routerTransition } from 'src/app/shared/animations/router.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    routerTransition
  ]
})
export class HomeComponent {

  constructor(
    private contexts: ChildrenOutletContexts,
  ) { }

  protected getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
