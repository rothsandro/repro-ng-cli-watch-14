import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-comp',
  template: `
    <p>
      comp works!
    </p>
  `,
  styles: [
  ]
})
export class CompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
