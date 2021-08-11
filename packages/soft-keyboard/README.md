# nativescript-soft-keyboard

It is a challenge to get height of soft keyboard in Android and IOS. Android has not provided a direct way to read its height. But Nativescript app sometimes needs this information to achieve a good user interface.

## Breaking changes
nativescript-soft-keyboard@2 for Nativescript@7

nativescript-soft-keyboard@1 for Nativescript version < 7

## Installation

```javascript
tns plugin add nativescript-soft-keyboard
```

## Usage
Step 1: add repository in app.gradle

```
repositories {
  maven {
    url  "https://jitpack.io"
  }
}
```

Step 2: add dependency in app.gradle

```
dependencies {
    implementation 'com.github.liuy97:KeyboardHeightProvider:1.0.1'
}
```


```javascript
    registerSoftKeyboardCallback((h) => console.log(h))
```


## API

| function | parameter | Description |
| --- | --- | --- |
| registerSoftKeyboardCallback | callback | register a callback for new height of soft keyboard |

## License

Apache License Version 2.0, January 2004

```javascript
ns plugin add @nativescript/soft-keyboard
```


## License

Apache License Version 2.0
