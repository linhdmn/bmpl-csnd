import React from 'react'
import {Link }from 'react-router-dom'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import validator from 'validator';
import {hideInfo} from '../constants/helpers';

const required = (value) => {
    if (!value.toString().trim().length) {
        return <span className="badge badge-danger">Require</span>
    }
};

const Email = (value) => {
    if (!validator.isEmail(value)) {
        return <span className="badge badge-danger">"{value}" is invalid email.</span>
    }
};

const LoginForm =(props)=> {
    console.log(props);
    if (props.userID) {
        if(props.role === "Admin"){
            props.history.push('/admin');
            return null;
        }
        return null;
    }
    else {
        return (
            <div className="row" 
            style={{
                'textAlign':'center',
                'position': 'fixed',
                'top': '50%',
                'left': '50%',
                'marginTop': '-200px',
                'marginLeft': '-200px',
                }}>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    hideInfo();
                    let data={
                        email:document.getElementById('email').value,
                        password: document.getElementById('password').value
                    };
                    props.Login(data);
                }}>
                    <div className="col">
                        <div className="card" style={{'width': '350px'}}>
                            <div className="card-header text-center" >
                                <h1><b>Login</b></h1>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 info-hide">
                                        <span id="info-text"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <Input type="email" name="" id="email" className="form-control" validations={[required, Email]}
                                               placeholder="Email address" autoFocus="true">
                                        </Input>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <Input type="password" id="password" className="form-control" validations={[required]}
                                               placeholder="Password">
                                        </Input>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <Button className="btn-login btn btn-lg btn-primary btn-block" type='submit'>Login</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <Link to="/register" style={{ textDecoration: 'none' }}><span>Don't have account? Create one</span></Link>
                                </div>
                                <div className="row">
                                    <Link to="/forgetpassword" style={{ textDecoration: 'none' }}><span>Forgot password?</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
};

export default LoginForm
