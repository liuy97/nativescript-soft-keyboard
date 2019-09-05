# nativescript-soft-keyboard

It is a challenge to get height of soft keyboard in Android and IOS. Android has not provided a direct way to read its height. But Nativescript app sometimes needs this information to achieve a good user interface.

## Installation

```javascript
tns plugin add nativescript-soft-keyboard
```

## Usage
	
    ```javascript
        registerSoftKeyboardCallback((h) => console.log(h))
    ```)


## API

| function | parameter | Description |
| --- | --- | --- |
| registerSoftKeyboardCallback | callback | register a callback for new height of soft keyboard |

## License

Apache License Version 2.0, January 2004
