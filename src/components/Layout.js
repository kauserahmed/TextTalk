import React, { Component} from 'react';
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from '../Events'
import LoginForm from './LoginForm'


const socketUrl = "http://localhost:3231"
export default class Layout extends Component {
	constructor(props) {
		super(props);
	  
		this.state = {
			socket:null,
			user:null
		};
	  }

	  componentWillMount() {
		this.initSocket()
	}

	initSocket = ()=>{
		const socket = io(socketUrl)

		socket.on('connect', ()=>{
			console.log("Connected");
		})
		
		this.setState({socket})
	}

    render() {
		const { title } = this.props
		return (
			<div className="container">
				{
                    title
				}
			</div>
		);
	}

}