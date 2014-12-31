webspeech
=========

A simple and easy to use HTML5 Web Speech API Wrapper Library.

## Install
```
bower install webspeech
```

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
