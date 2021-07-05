
<h1 align="center">

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-styled-dialogs"><img src="http://img.shields.io/npm/v/react-native-styled-dialogs.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-styled-dialogs/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-styled-dialogs#License"><img src="https://img.shields.io/npm/l/react-native-styled-dialogs.svg?style=flat" /></a>
</p>


    ReactNative: Native Styled Dialogs (Android/iOS)

If this project has helped you out, please support us with a star 🌟
</h1>

This library shows a beautiful and customizable designed dialog with header.

| **[Android: MaterialStyledDialogs](https://github.com/javiersantos/)**             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/javiersantos/MaterialStyledDialogs/master/Screenshots/banner.png" />                  |


| **[iOS: PMAlertController](https://github.com/pmusolino/PMAlertController)**             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/pmusolino/PMAlertController/master/preview_pmalertacontroller.png"  />                  |


## 📖 Getting started

`$ yarn add react-native-styled-dialogs`

> This library is supported React Native 60 and above


- **iOS**

> **iOS Prerequisite:** Please make sure `CocoaPods` is installed on your system

	- Add the following to your `Podfile` -> `ios/Podfile` and run pod update:


```
  use_frameworks! :linkage => :static

  pod 'PMAlertController', :git => 'https://github.com/prscX/PMAlertController', :branch => 'swift-version-fix'

  # Follow [Flipper iOS Setup Guidelines](https://fbflipper.com/docs/getting-started/ios-native)
  # This is required because iOSPhotoEditor is implemented using Swift and we have to use use_frameworks! in Podfile
  $static_framework = ['FlipperKit', 'Flipper', 'Flipper-Folly',
    'CocoaAsyncSocket', 'ComponentKit', 'Flipper-DoubleConversion',
    'Flipper-Glog', 'Flipper-PeerTalk', 'Flipper-RSocket', 'Yoga', 'YogaKit',
    'CocoaLibEvent', 'OpenSSL-Universal', 'boost-for-react-native']
  
  pre_install do |installer|
    Pod::Installer::Xcode::TargetValidator.send(:define_method, :verify_no_static_framework_transitive_dependencies) {}
    installer.pod_targets.each do |pod|
        if $static_framework.include?(pod.name)
          def pod.build_type;
            Pod::BuildType.static_library
          end
        end
      end
  end
  
```

- Please make sure [**Flipper iOS Setup Guidelines**](https://fbflipper.com/docs/getting-started/ios-native/) steps are added to Podfile, since iOSPhotoEditor is implemented using Swift and we have to use use_frameworks! in Podfile


- **Android**


## 💻 Usage

```javascript
import RNStyledDialogs from 'react-native-styled-dialogs';

RNStyledDialogs.Show({
  title: "Awesome!",
  description:
    "Glad to you like RNStyledDialogs! If you are up for it, we would like to appreciate you receiving us.",
  positiveText: "Go",
  neutralText: "Close",
  negativeText: "Later",
  onPositive: () => { },
  onNeutral: () => { },
  onNegative: () => { },
  onCancellable: () => { }
});

```

## 💡 Props

- **Props: Generic**

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `title`       | `string`     |         | Specify title on dialogs
| `description`       | `string`     |         | Specify description on dialog
| `positiveText`       | `string`     |         | Specify positive button text
| `neutralText`       | `string`     |         | Specify neutral button text
| `negativeText`       | `string`     |         | Specify positive negative button text
| `headerBackgroundColor`       | `string - HEX COLOR`     |   `#FFFFFF`      | Specify header background color
| `headerIcon`       | `string`     |         | Specify header icon
| `dialogAnimation`       | `bool`     |    `true`     | Specify dialog animation (enable/disable)
| `darkerOverlay`       | `bool`     |    `false`     | Specify dialog overlay (enable/disable)
| `cancelable`       | `bool`     |         | Specify cancelable of dialog behaviour (enable/disable)
| `autoDismiss`       | `bool`     |    `false`     | Specify dialog should get automatically dismiss or not (enable/disable)
| `onPositive`       | `func`     |         | Specify positive click callback function
| `onNeutral`       | `bool`     |         | Specify netural click callback function
| `onNegative`       | `bool`     |         | Specify negative click callback function
| `onCancellation`       | `bool`     |   `true`      | Specify cancellation callback function



- **Props: Android**

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `headerBackgroundImage`       | `string`     |         | Specify header background image
| `headerTitle`       | `string`     |         | Specify header title
| `headerIconAnimation`       | `bool`     |    `true`     | Specify header icon animation (enable/disable)
| `scrollable`       | `bool`     |    `false`     | Specify description scrollable (enable/disable)
| `maxLines`       | `number`     |    `5`     | Specify description max number of lines


- **Props: iOS**

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `positiveTextColor`      | `string - HEX COLOR`     |         | Specify positive button text color
| `positiveBackgroundColor`      | `string - HEX COLOR`     |    `#FFFFFF`     | Specify positive button background color
| `neutralTextColor`      | `string - HEX COLOR`     |         | Specify neutral button text color
| `neutralBackgroundColor`      | `string - HEX COLOR`     |     `#FFFFFF`    | Specify neutral button background color
| `negativeTextColor`      | `string - HEX COLOR`     |         | Specify negative button text color
| `negativeBackgroundColor`      | `string - HEX COLOR`     |     `#FFFFFF`    | Specify negative button background color


## Icons

> **Note:** Since we are using native libraries, we have not found a solution in order to render RN Images in production, therefore please copy all your image assets in platform specific folders:

- **Android:** Please copy your image assets in app resource drawable folder
- **iOS:** Please copy your image assets in app resources folder

> Please refer example application for the image usage.


## ✨ Credits

- Android: [Android: MaterialStyledDialogs](https://github.com/javiersantos/)
- iOS: [iOS: PMAlertController](https://github.com/pmusolino/PMAlertController)


## 🤔 How to contribute
Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/prscX/react-native-styled-dialogs/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💫 Where is this library used?
If you are using this library in one of your projects, add it in this list below. ✨


## 📜 License
This library is provided under the Apache License.

RNStyledDialogs @ [prscX](https://github.com/prscX)

## 💖 Support my projects
I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:
* Starring and sharing the projects you like 🚀
* If you're feeling especially charitable, please follow [prscX](https://github.com/prscX) on GitHub.

  <a href="https://www.buymeacoffee.com/prscX" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  Thanks! ❤️
  <br/>
  [prscX.github.io](https://prscx.github.io)
  <br/>
  </ Pranav >