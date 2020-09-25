import { Application } from '@nativescript/core';
import { SoftKeyboardCallbackFnType } from '.';

let softKeyboardCallback = null;

Application.ios.addNotificationObserver(UIKeyboardDidShowNotification, (event) => {
  const height: string = event.userInfo.valueForKey(UIKeyboardFrameEndUserInfoKey).CGRectValue.size.height.toString();
  if (softKeyboardCallback !== null) {
    softKeyboardCallback(height);
  }
});

export function registerSoftKeyboardCallback(callback: SoftKeyboardCallbackFnType) {
  softKeyboardCallback = callback;
}
