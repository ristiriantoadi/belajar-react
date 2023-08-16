import React, { Component } from 'react';

class Message extends Component{
    render(){
        const message = "bla";
        if (message === "something")
            return <h1>This is a another {message}. Here it comes from a function: {this.getSomething()}</h1>;
        else
            return <h1>Balalalala</h1>
    }
    getSomething(){
        return "blue";
    }
}

export default Message;