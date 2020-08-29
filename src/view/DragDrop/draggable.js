import React from 'react';
import {DragDrop} from './dragdrop'

export class Draggable extends React.Component{
  constructor(props){
    super(props)
  }
  onDragStart(e){
    e.dataTransfer.setData(DragDrop.format(), JSON.stringify(this.props))
    if(this.props.onDragStart){
      this.props.onDragStart(e)
    }
  }
  render(){
    let _className = this.props.className?this.props.className : ""; 
    return(
      <div
        className={_className + " draggable"}
        draggable={true}
        onDragStart={this.onDragStart.bind(this)}
      >
        {this.props.children}
      </div>
    )
  }
}

