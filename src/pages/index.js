import React from 'react'
import logo from '../images/two.jpg'

const IndexPage = () => (
  <div>
    <h3 style={{textAlign: 'center'}}>Welcome to Centane Youth Development Website</h3>
    <p style={{textAlign: 'center', fontStyle: 'italic'}}>This is a sample website for Centane youth development Structure </p>
      <img src={logo} alt="background image" style={{width: '100%', height: '600px'}}/>
  </div>
);

export default IndexPage
