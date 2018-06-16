
/**
 * Created by Montserrat Plata Torres on 21/01/18.
 */

import React, {Component} from 'react';
import LoginComponent from "./LoginComponent";
import './Login.css'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as usuarioActions from '../../actions/usuarioActions';
import toastr from 'toastr';

const containerStyle = {
    height: '85vh'
};

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario:{
                email: '',
                password: '',
            }
        };
    }

    loginWithPassword = (e) => {
        e.preventDefault();
        const user = Object.assign({},this.state.usuario);
        console.log(user.email + user.password);
        this.props.usuarioActions.iniciarSesion(user)
        .then( () => {
            this.props.history.push('/');
        });

    };

    handleChange = (e) => {
        let usuario = this.state.usuario;
        usuario[e.target.name] = e.target.value;
        this.setState({usuario});
    };

    render(){
        return(

          <div className="back-login">

            <h1>Bienvenido Doctor</h1>
            <div className="App" style={containerStyle}>
                <LoginComponent
                    onChange={this.handleChange}
                    onSubmit={this.loginWithPassword}
                    usuario={this.state.usuario}
                />
            </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        usuario: state.usuario
    }
}

function mapDispatchToProps(dispatch) {
    return {
        usuarioActions: bindActionCreators(usuarioActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (LoginContainer);
