# LifeMaster
Run the project on a specific platform:
Template from :https://github.com/react-everywhere/re-start/tree/react-16

### Tips on installation
After you install npm stuff you should run **yarn transpile** because of the following bug
https://stackoverflow.com/questions/48034538/how-to-solve-this-error-you-may-need-an-appropriate-loader-to-handle-this-file-t

#### Fonts
Link fonts in RN ios and Android
https://medium.com/@danielskripnik/how-to-add-and-remove-custom-fonts-in-react-native-b2830084b0e4
Source for fonts:
https://fonts.google.com/
1-add the font in index.html 
<link href="https://fonts.googleapis.com/css?family=Itim" rel="stylesheet">
2-make sure your font  name same like web name
3-use font family >> fontFamily: 'Itim'
 
#### Android
react-native run-android

#### iOS
react-native run-ios

#### Web
npm/yarn run web

#### Windows
react-native windows react-native run-windows

#### Desktop (Electron)
npm/yarn run electron

In Windows:

1-Python 2.27

2-Windows Build tools npm install --global --production windows-build-tools

3-It's better to use git bash for node scripts/additionalDependencies.js
