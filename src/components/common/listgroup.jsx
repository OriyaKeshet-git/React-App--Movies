import React, { Component } from 'react';

class ListGroup extends Component {
    
    render() { 

      const {items, onItemSelect,textProperty,selectedItem, valueProperty}=this.props;
        return (<ul className="list-group" >
          
        {items.map(x=><li     
        onClick={()=>{onItemSelect(x)}} key={x[valueProperty]} 
        className={ selectedItem===x ? "list-group-item active":"list-group-item" }>{x[textProperty]}</li>)}
        
      </ul>  );
    }
}
ListGroup.defaultProps={
textProperty:"name",
valueProperty:"_id"
};
export default ListGroup;