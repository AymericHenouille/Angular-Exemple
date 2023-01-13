import { HttpClient } from "@angular/common/http";
import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: '[svg]'
})
export class SvgDirective implements OnInit {

  @Input() public svg!: string;

  constructor(
    private el: ElementRef,
    private httpClient: HttpClient
  ) {}

  public ngOnInit(): void {
    this.httpClient.get(this.svg, { responseType: 'text' }).subscribe(svg => this.el.nativeElement.innerHTML = svg)
  }
}
