import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { HomeComponent } from "./home/home.component";
import { SecondComponent } from "./second/second.component";
import { ThirdComponent } from "./third/third.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'first', pathMatch: 'full' },
    { path: 'first', component: FirstComponent, data: { animation: 'firstPage' } },
    { path: 'second', component: SecondComponent, data: { animation: 'secondPage' } },
    { path: 'third', component: ThirdComponent, data: { animation: 'thirdPage' } },
    { path: '**', redirectTo: 'first' }
  ] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
