import { Component, OnDestroy, OnInit } from '@angular/core';
import { registerSoftKeyboardCallback } from 'nativescript-soft-keyboard';

@Component({
  selector: 'demo-app',
  template: `<GridLayout><page-router-outlet></page-router-outlet></GridLayout>`,
})
export class AppComponent  implements OnInit, OnDestroy {
  constructor() {
    registerSoftKeyboardCallback((h) => console.log(h));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    registerSoftKeyboardCallback(null);
  }
}
