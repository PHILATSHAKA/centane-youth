import React from 'react';
import logo from '../../images/logo.png';
import Link from 'gatsby-link';
import './nav.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="light" sticky="top" color="light" light expand="md" className="navigation">
        <div className="container">
          <NavbarBrand href="#" className="navbar-brand"><img  src={logo}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home" >Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
               <NavItem>
                  <NavLink href="/contact">Contact Us</NavLink>
                </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Updates
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/bursaries" className="blog-news">Bursaries</Link>
                  </DropdownItem>
                  <UncontrolledDropdown  inNavbar>
                  <DropdownItem divider />
                    <DropdownItem >
                       Universities
                    </DropdownItem>
                    <DropdownMenu>
                      <ul className="nested-dropdown-menu">
                     <li><a href="http://www.uct.ac.za/">UCT</a></li>
                     <li><a href="http://www.ufh.ac.za/">Fort Hare</a></li>
                     <li><a href="https://www.ufs.ac.za/">Free State</a></li> 
                     <li><a href="https://www.ukzn.ac.za/">UKZN</a></li> 
                     <li><a href="http://www.nwu.ac.za/">NWU</a></li> 
                     <li><a href="https://www.up.ac.za/">UP</a></li>
                     <li><a href="https://www.ru.ac.za/">Rhodes</a></li> 
                     <li><a href="https://www.sun.ac.za/english">Stellenbosch</a></li> 
                     <li><a href="https://www.uwc.ac.za/Pages/default.aspx">UWC</a></li> 
                     <li><a href="https://www.wits.ac.za/">Wits</a></li> 
                     <li> <a href="https://educonnect.co.za/institutions/institution/university-limpopo-turfloop/">Turfloop</a></li>
                     <li><a href="http://www.wsu.ac.za/waltersisulu/">WSU</a></li> 
                     <li> <a href="https://www.mandela.ac.za/">NMMU</a></li>
                      </ul>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/news" className="blog-news">News</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
           </div>
        </Navbar>

    );
  }
}

//export default class ReactNavbar extends React.Component {
//  constructor(props) {
//    super(props);
//
//    this.toggleNavbar = this.toggleNavbar.bind(this);
//    this.state = {
//      collapsed: false
//    };
//  }
//
//  toggleNavbar() {
//    this.setState({
//      collapsed: !this.state.collapsed
//    });
//  }
//  render() {
//    return <div>
//        <Navbar color="dark" light>
//          <NavbarBrand to="/" className="mr-auto">
//            <img src={logo} className="navbar-brand" />
//          </NavbarBrand>
//          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//          <Collapse isOpen={!this.state.collapsed} navbar>
//            <Nav navbar>
//              <NavItem>
//                <Link to="/home">
//                  <Button color="primary" block>
//                    Home
//                  </Button>
//                </Link>
//              </NavItem>
//              <NavItem>
//                <Link to="about">
//                  <Button color="primary" block>
//                    About
//                  </Button>
//                </Link>
//              </NavItem>
//               <NavItem>
//                  <Link to="contact">
//                    <Button color="primary" block>
//                      Contact Us
//                    </Button>
//                  </Link>
//                </NavItem>
//              <NavItem>
//                <NavLink href="https://github.com/mpolinowski/gatsby-reactstrap" target="_blank">
//                  <Button color="danger" block>
//                    Github Repository
//                  </Button>
//                </NavLink>
//              </NavItem>
//            </Nav>
//          </Collapse>
//        </Navbar>
//      </div>;
//  }
//}
