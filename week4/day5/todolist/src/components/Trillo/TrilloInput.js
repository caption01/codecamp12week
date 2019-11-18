import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';


class TrilloInput extends React.Component{

  render(){
    return (
      <div className="trillo-input mt-3">
            <InputGroup onChange={this.props.handleInputChange} onKeyPress={this.props.handleKeyPress} className="mb-3" >
                <FormControl
                    placeholder="Add List"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    id="trilloInput"
                />
                <InputGroup.Append>
                    <Button onClick={this.props.handleSubmit} variant="outline-secondary">Add</Button>
                </InputGroup.Append>
            </InputGroup>
      </div>
    );
  }
  
}


export default TrilloInput;


