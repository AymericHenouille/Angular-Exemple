import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ReferencePipe } from './pipes/reference.pipe';
import { SvgDirective } from './directives/svg.directive';
import { HttpClientModule } from '@angular/common/http';

const COMPONENTS = [
  HeaderComponent
];

const PIPES = [
  ReferencePipe
];

const DIRECTIVES = [
  SvgDirective
]

@NgModule({
  declarations: [
    COMPONENTS,
    PIPES,
    DIRECTIVES
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    COMPONENTS,
    PIPES,
    DIRECTIVES
  ]
})
export class SharedModule { }
