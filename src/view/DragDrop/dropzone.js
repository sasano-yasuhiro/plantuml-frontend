import React from 'react';
import {DragDrop} from './dragdrop'

export class DropZone extends React.Component{
  constructor(props){
    super(props)
    this.onDragOver = this.onDragOver.bind(this)
    this.onDrop= this.onDrop.bind(this)
    this.state = {children: this.props.children}
  }
  onDragOver(e){
    e.preventDefault();
    if(this.props.onDragOver){
      this.props.onDragOver(e)
    }
  }
  onDrop(e){
    e.preventDefault();
    let data = e.dataTransfer.getData(DragDrop.format());
    data = JSON.parse(data)
    if(this.props.onDrop){
      this.props.onDrop(data)
    }
  }
  render(){
    let _className = this.props.className?this.props.className : ""; 
    return(
      <div
        className={_className + " dropzone"}
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        {this.state.children}
      </div>
    )
  }
}

