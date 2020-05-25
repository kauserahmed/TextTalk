import React, { Component } from 'react';
import FAChevronDown from 'react-icons/lib/md/keyboard-arrow-down'
import FAMenu from 'react-icons/lib/fa/list-ul'
import MdEject from 'react-icons/lib/md/eject'

export default class SideBar extends Component{
		
	render(){
		const { user, logout} = this.props
		return (
			<div id="side-bar">
					<div className="heading">
						<div className="app-name">TextTalk <FAChevronDown /></div>
						<div className="menu">
							<FAMenu />
						</div>
					</div>

					<div
						className="users" >																		
					</div>
					
					<div className="current-user">
						<span>{user.name}</span>
						<div onClick={()=>{logout()}} title="Logout" className="logout">
							<MdEject/>	
						</div>
					</div>
			</div>
		);
	
	}
}
