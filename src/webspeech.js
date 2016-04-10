(function () {
    /**
     * a robotic speaker who speaks with given text and language
     */
    function RobotSpeaker()
    {
        try{
            this.u = new SpeechSynthesisUtterance();
        }
        catch(ex){
            throw "This browser does not have support for webspeech api";
        }
        this.u.rate = 1.0;
        var callBack = null;

        this.onEnd = function(cb) {
          callBack = cb;
        };

        this.setSpeed = function(playbackSpeed) {
            if (playbackSpeed < 0.1 || playbackSpeed > 10) {
                //invalid speed;
                return false;
            }
            this.u.rate = playbackSpeed;
            return true;
        };

        this.u.onend = function(event) {
            //callback to handler provided
            if (callBack && (typeof callBack === 'function')) {
                callBack();
            }
        };
        this.speak = function(lang, text){
            this.u.lang = lang;
            this.u.text = text;
            speechSynthesis.speak(this.u);
        };
    }

    /**
     * An audio listener which will listen and convert spoken sounds to text
     * @param callback function to call when a audio is listened and recognized
     * @constructor
     */
    function AudioListener(callback)
    {
        try{
            this.listener = new webkitSpeechRecognition();
        }
        catch(ex){
            throw "This browser does not have support for webspeech api";
        }

        if(platform.os.toString().indexOf("OS X") > -1) {
            //Seems like, on windows, continuous listening doesn't work/supported
            this.listener.continuous = true;
        }
        if(callback) {
            this.callBack = callback;
        }
        this.listener.lang = "en";

        //TODO work with less accurate results, which are returned very fast
        //this.listener.interimResults = true;

        var me = this;

        //-----Events---------
        this.listener.onresult = function(event) {
            if (event.results.length > 0) {
                var result = event.results[event.results.length-1];
                if(result.isFinal) {
                    me.callBack(result[0].transcript);
                }
            }
        };
        this.listener.onsoundstart = function(event) {
            //TODO
        };
        this.listener.onspeechstart = function(event) {
            //TODO
        };
        this.listener.onsoundend = function(event) {
            //TODO
        };
        //-----End Events---------

        this.isContinuous = function() {
            return this.listener.continuous;
        };

        /**
         * Start listening with given language(optional, defaults is english)
         * @param lang
         */
        this.listen = function(lang, callback) {
            if(lang) {
                this.listener.lang = lang;
            }
            if(callback) {
                this.callBack = callback;
            }
            this.listener.start();
        };

        /**
         * Stop listening
         * @param lang
         */
        this.stop = function() {
            this.listener.stop();
            console.log("audio listener stopped");
        };
    }


    var ws = {
        Speaker: RobotSpeaker,
        Listener: AudioListener,
        Languages: {
            ENGLISH: "en",
            FRENCH: "fr"
        }
    };
    if (!window.webspeech) {
        webspeech = ws;
    }
    webSpeechNoConflict = function() {
        return ws;
    };
})();