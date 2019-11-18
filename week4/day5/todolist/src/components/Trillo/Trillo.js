import React from 'react';
import { Container } from 'react-bootstrap'
import TrilloList from './TrilloList.js'
import TrilloInput from './TrilloInput.js'
import './Trillo.css'

class Trillo extends React.Component{


state = {
    input: "",
    list: ['click me when you finish'],
    tick: {
      status: "off",
      on: {textDecorationLine: "line-through"},
      off: {textDecorationLine: "none"}
    }

    
}
  
  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleSubmit()
      document.getElementById("trilloInput").value = ""
    }

  }

  handleSubmit = () => {
    if(this.state.input !== "") {
      const list = this.state.list.slice()
      const newList = this.state.input
      this.setState({list: list.concat(newList)})
      document.getElementById("trilloInput").value = ""
      this.setState({input: ""})
    }
  }

  handleRemove = (clickElement) => {
    const list = this.state.list.slice()
    list.splice(clickElement.index, 1)
    this.setState({list: list})
  }

  handleTickChange = (clickItem) => {

    const tickItem = document.getElementById(clickItem.index)
    if(tickItem.className === "off") {
      tickItem.style.textDecoration = "line-through";
      tickItem.className = "on"
    }else if(tickItem.className === "on"){
      tickItem.style.textDecoration = "none";
      tickItem.className = "off"
    }
  }
  

  render(){

    return (
      <div>
        <Container className="border border-info rounded trillo-container">
            <TrilloInput handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} handleKeyPress={this.handleKeyPress} />
            <TrilloList list={this.state.list} handleRemove={this.handleRemove} tick={this.state.tick} handleTickChange={this.handleTickChange} />
        </Container>
      </div>
    );
  }
  
}


export default Trillo;
