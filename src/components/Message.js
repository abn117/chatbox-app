import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    render(){
        return (
            <p className="user-message">Message here !</p>
        );
    }
}
   
Message.propTypes = {
    
};

export default Message;