import React from 'react';

const list = ["Item1", "Item2", "Item3", "Item4", "Item5"]

const listItem = list.map((item, index) => <div key={index} className="trillo-list border border-light">{item}</div>)

class TrilloList extends React.Component{

  render(){
    return (
      <div className="trillo-list-group">
        {listItem}
      </div>
    );
  }
  
}


export default TrilloList;


