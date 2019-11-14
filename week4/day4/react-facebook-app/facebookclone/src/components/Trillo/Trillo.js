import React from 'react';
import { Container } from 'react-bootstrap'
import TrilloList from './TrilloList.js'
import './Trillo.css'

class Trillo extends React.Component{


  render(){
    return (
      <div>
        <Container className="border border-info rounded trillo-container">
            <p className="trillo-header">Phone Features</p>
            <TrilloList />
            <p className="trillo-footer">Add a card</p>
        </Container>
      </div>
    );
  }
  
}


export default Trillo;
