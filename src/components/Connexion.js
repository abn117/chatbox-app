import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

class Connexion extends Component {

    constructor() {
        super();

        this.state = {
            pseudo: '',
            goToChat: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const pseudo = event.target.value;
        this.setState({ pseudo: pseudo })
    
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ goToChat: true });
    }

    render() {
        if (this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }
        return (
            <div className="container">
                <form className="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            value={this.state.pseudo}
                            onChange={this.handleChange}
                            placeholder="Saisir un pseudo"
                            type="text"
                            required
                        />
                        <button type="submit">Connexion</button>
                    </div>
                </form>
            </div>
        );
    };

}

Connexion.propTypes = {
    
};

export default Connexion;