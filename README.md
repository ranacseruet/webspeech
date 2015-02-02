webspeech
=========

A simple and easy to use HTML5 Web Speech API Wrapper Library.

## Compatibility
Currently only works on Google Chrome Web Browser. Library will be updated wrapping other browsers' mechanism as soon as they starts supporting this technology. In case you noticed a browser started supporting but this library is not yet updated, please [create an issue](https://github.com/ranacseruet/webspeech/issues) mentioning details.

## Install
```
bower install webspeech
```
If you are not using bower, simply download as zip file and include to the HTML page. Also, don't forget to include the [platform.js](https://github.com/bestiejs/platform.js) file as well.(in case of bower, it will be installed automatically as dependency)

## Usage

```
//Text To Voice
    var speaker = new RobotSpeaker();
    speaker.speak("en", document.getElementById("text").value);

//Voice To Text
    var listener = new AudioListener();
    listener.listen("en", function(text) {
        document.getElementById("text").value = text;
    });
```

## Development
You must have to have node/npm and grunt installed on your development machine.
Install all dev dependencies:
```
$npm install
```
Run grunt tasks and build:
```
$grunt
```

## Contribution
Being this technology relatively young, there could be several features, that have been missed in integration or bugs. Feel free to create issues on
github with details and send pull requests. Thanks!
