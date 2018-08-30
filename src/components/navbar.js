import React from 'react'
import Link from 'gatsby-link'
const NavBar = () => (
        <div style={{
            background: '#f4f4f4',
            paddingTop: '10px'
        }}>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <li> <Link to ="/" activeClassName="active">Home</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/blog">Updates</Link></li>
            <li><Link to ="/contact">Contact Us</Link></li>
        </ul>
        </div>
)
export default NavBar;