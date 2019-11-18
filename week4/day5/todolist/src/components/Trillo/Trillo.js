import React from 'react';
import { Container } from 'react-bootstrap'
import TrilloList from './TrilloList.js'
import TrilloInput from './TrilloInput.js'
import './Trillo.css'

class Trillo extends React.Component{


state = {
    input: "",
    list: []
    }
  
  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleSubmit()
    }

  }

  handleSubmit = () => {
    if(this.state.input !== "") {
      const list = this.state.list.slice()
      const newList = this.state.input
      this.setState({list: list.concat(newList)})

      document.getElementById("trilloInput").value = ""
    }
  }

  handleRemove = (clickElement) => {
    const list = this.state.list.slice()
    list.splice(clickElement.index, 1)
    this.setState({list: list})
  }
  

  render(){

    return (
      <div>
        <Container className="border border-info rounded trillo-container">
            <TrilloInput handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} handleKeyPress={this.handleKeyPress} />
            <TrilloList list={this.state.list} handleRemove={this.handleRemove} />
        </Container>
      </div>
    );
  }
  
}


export default Trillo;
