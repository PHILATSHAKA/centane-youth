import React from 'react'
import logo from '../../images/logo.png';
import ReactNavbar from '../../pages/nav/nav.js';
import './index.css';

class Header extends React.Component {
    state={showMenu: false}
    toggleMenu =()=>{
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
  render(){
    return (

        <ReactNavbar />

    )
  }
  
}
export default Header
