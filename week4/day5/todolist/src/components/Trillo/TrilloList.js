import React from 'react';


class TrilloList extends React.Component{

  render(){

    const listItem = this.props.list.map((item, index) => 
    <div key={index} className="trillo-list border border-light d-flex justify-content-between">
      <div id={index} className={this.props.tick.status} style={this.props.tick.off} onClick={()=>this.props.handleTickChange({index})}>{item}</div>
      <div onClick={()=>this.props.handleRemove({index})}><i className='far fa-trash-alt fa-lg'></i></div>
    </div>
    )

    return (
      <div className="trillo-list-group">
      {listItem}
      </div>
    );
  }
  
}


export default TrilloList;


