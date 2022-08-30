import { isAndroid, isIOS, Utils } from '@nativescript/core';
import { DemoSharedBase } from '../utils';

export class DemoSharedSoftKeyboard extends DemoSharedBase {

  testIt() {
    console.log('test soft-keyboard!');
    this.dismissSoftKeyboard();
  }

  private dismissSoftKeyboard() {
    if (isIOS) {
      UIApplication.sharedApplication.keyWindow?.endEditing(true);
    } else if (isAndroid) {
      Utils.ad.dismissSoftInput();
    }
  }
}
