import { Component } from '@angular/core';
import { DemoSharedSoftKeyboard } from '@demo/shared';

@Component({
  selector: 'demo-soft-keyboard',
  templateUrl: 'soft-keyboard.component.html',
})
export class SoftKeyboardComponent{
  demoShared = new DemoSharedSoftKeyboard();

}
