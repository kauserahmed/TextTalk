import React, { Component } from 'react';
import logo from './TextTalk.png'

export default class LoginForm extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	nickname:"",
	  	error:""
	  };
	}

	
    
    render() {
        return (
			<div className="login">
				
				<form onSubmit={this.handleSubmit} className="login-form" >

					<label htmlFor="nickname">
						<img 
						src = {logo}
						alt = "logo"/>
						<h2>Please Enter A User Name </h2>
					</label>
					<input
						ref={(input)=>{ this.textInput = input }} 
						type="text"
						id="nickname"
						value={nickname}
						onChange={this.handleChange}
						placeholder={'Please enter here'}
						/>
						<div className="error">{error ? error:null}</div>

				</form>
			</div>
		);

    }
}