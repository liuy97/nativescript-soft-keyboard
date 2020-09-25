import { Component, NgZone } from '@angular/core';
import { DemoSharedSoftKeyboard } from '@demo/shared';
import {} from '@nativescript/soft-keyboard';

@Component({
	selector: 'demo-soft-keyboard',
	templateUrl: 'soft-keyboard.component.html',
})
export class SoftKeyboardComponent {
	demoShared: DemoSharedSoftKeyboard;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedSoftKeyboard();
	}
}
