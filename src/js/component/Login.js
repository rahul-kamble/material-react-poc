'use strict';

import React, {Component} from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreators from '../actions/auth';
import * as appActionCreators from '../actions/app';

class Login extends Component{

    constructor(props) {

        super(props);
        this.state = {
            username: '',
            password: ''
        };

    }

    authenticate(e) {

        if (this.state.username == "" || this.state.password == "") return;
        e.preventDefault();
        this.props.authActions.authenticateUser(this.state.username, this.state.password);

    }

    onUsernameChange(e) {

        this.setState({username: e.target.value});

    }

    onPasswordChange(e) {

        this.setState({password: e.target.value});

    }

    openSignUp(){

        this.props.appActions.showHideLoginBox(false);

    }

    render(){

        return(
            <Card className="text-center" >
                <CardHeader
                  title="LOGIN"
                  actAsExpander={false}
                  showExpandableButton={false}/>
                <CardText expandable={false}>
                    <TextField  hintText="Enter Username"
                                floatingLabelText="Username"
                                onChange={this.onUsernameChange.bind(this)} /><br />
                    <TextField  hintText="Enter Password"
                                floatingLabelText="Password"
                                type="password"
                                onChange={this.onPasswordChange.bind(this)} />
                    <div>
                        <RaisedButton   label="Login"
                                        secondary={true}
                                        className="login-btn"/>
                        <RaisedButton   label="Signup"
                                        primary={true}
                                        className="login-btn left-buffer"
                                        onClick={this.openSignUp.bind(this)}/>
                    </div>
                </CardText>
            </Card>
        );
    }

}

const mapStateToProps = (state) => ({
    loginBox: state.app.loginBox
});

const mapDispatchToProps = (dispatch) => ({
   authActions: bindActionCreators(authActionCreators, dispatch),
   appActions: bindActionCreators(appActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);





