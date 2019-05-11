/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

class VoiceCommand {
    static recognition;
    static speechRecognitionList;
    static callbacklist;
    static _init() {
        this.callbacklist = [];
        this.recognition = new SpeechRecognition();
        this.recognition.onresult = (event)=>{
            for(let it = 0; it<this.callbacklist.length; ++it){
                let callback = this.callbacklist[it];
                callback.cb(event.results[0][0].transcript);
            }
        }
    }
    static start() {
        this.recognition.start();
    }
    static setcallback(cb){
        this.callbacklist.push(cb);
    }
    static removecallback(cb){
        for(let it = 0; it<this.callbacklist.length; ++it){
            let callback = this.callbacklist[it];
            if(callback.id === cb.id){
                this.callbacklist.splice(0,1);
                return;
            }
        }
    }

}
VoiceCommand._init();
export default VoiceCommand;