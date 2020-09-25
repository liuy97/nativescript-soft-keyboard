import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SoftKeyboardComponent } from './soft-keyboard.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SoftKeyboardComponent }])],
	declarations: [SoftKeyboardComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class SoftKeyboardModule {}
