import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mic from './mic.png';
import VoiceCommand from './VoiceCommand';

class ReactVoice extends Component{
    constructor(props){
        super(props);
        this.state = {
            debug: true,
            line: ""
        };

    }

    onVoiceCommand = (line)=>{
        this.setState({
            line: line
        });
        // handle command here
    }

    start(){
        VoiceCommand.start(this.onVoiceCommand);
    }

    render(){
        return(
            <div>
                <img src={Mic} alt="mic" onClick={(event)=>{this.start()}} />
                {this.state.debug?<div>debug: {this.state.line}</div>:""}
            </div>
        )
    };
}

ReactVoice.propTypes ={
    language: PropTypes.string,
    grammar: PropTypes.object
};

export default ReactVoice;