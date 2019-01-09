import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    render() {
        return(
            <form className="form">
                <textarea
                    required
                    maxLength='140'/>

                <div className="info">
                    140
                </div>
                <button type="submit">
                    Submit!
                </button>
            </form>
        )
    }
}

Form.propTypes = {
    
};

export default Form;