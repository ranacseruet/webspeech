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

```
<script src="https://raw.githubusercontent.com/ranacseruet/webspeech/master/build/webspeech.min.js"></script>
```

## Usage

```
//Text To Voice
    var speaker = new webspeech.Speaker();
    speaker.speak("en", document.getElementById("text").value);

//Voice To Text
    var listener = new webspeech.Listener();
    listener.listen("en", function(text) {
        document.getElementById("text").value = text;
    });
```

##Language Compatibility
There isn't any official list of languages which are supported in web speech api. However, I believe, the languages listed on the
[demonstration page](https://www.google.com/intl/en/chrome/demos/speech.html) is suppose to be a legitimate list. For any languages,
you should use the [language ISO codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and you should be fine.

Library includes a language variable(in progress, need to add languages)
that you can use like follows:

```
//webspeech.languages.ENGLISH
or
//webspeech.languages.FRENCH
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

## Development Considerations
- Add Unit Tests
- Add language list so that developers doesn't need to enter language code manually

## Contribution
Being this technology relatively young, there could be several features, that have been missed in integration or bugs. Feel free to create issues on
github with details and send pull requests. Thanks!
