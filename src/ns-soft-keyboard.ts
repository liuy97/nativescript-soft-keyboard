import { android as androidApp, ios as iosApp, AndroidApplication } from 'tns-core-modules/application';
import { SoftKeyboardCallbackFnType } from '.';
import { isAndroid, isIOS, screen } from 'tns-core-modules/platform/platform';

let softKeyboardCallback = null;
let softKeyboardProvider = null;

if (isAndroid) {
  androidApp.on(AndroidApplication.activityCreatedEvent, (args) => {
    softKeyboardProvider = new (com as any).hold1.keyboardheightprovider.KeyboardHeightProvider(args.activity);
    const listener = new (com as any).hold1.keyboardheightprovider.KeyboardHeightProvider.KeyboardListener({
      onHeightChanged: (height: number) => {
        if (softKeyboardCallback) {
          softKeyboardCallback(height / screen.mainScreen.scale);
        }
      }
    });
    softKeyboardProvider.addKeyboardListener(listener);
  });
  androidApp.on(AndroidApplication.activityPausedEvent, () => {
    if (softKeyboardProvider) {
      softKeyboardProvider.onPause();
    }
  });
  androidApp.on(AndroidApplication.activityResumedEvent, () => {
    if (softKeyboardProvider) {
      softKeyboardProvider.onResume();
    }
  });
}

if (isIOS) {
  softKeyboardProvider = iosApp.addNotificationObserver(UIKeyboardDidShowNotification, (event) => {
    const height: string = event.userInfo.valueForKey(UIKeyboardFrameEndUserInfoKey).CGRectValue.size.height.toString();
    if (softKeyboardCallback !== null) {
      softKeyboardCallback(height);
    }
  });
}

export function registerSoftKeyboardCallback(callback: SoftKeyboardCallbackFnType) {
  softKeyboardCallback = callback;
}
