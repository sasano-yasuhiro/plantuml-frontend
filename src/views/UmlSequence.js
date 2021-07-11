import React from 'react';
import Relations from './relations';
import TextArea from './common/textarea'

export default class UmlSequence extends Relations{
  constructor(props){
    super(props);
    this.state = {
      message: '',
    }
  }
  onChange(e){
    let {id, value} = e.target
    let state = {
      src: super.state.src,
      dest: super.state.dest,
      relation: super.state.relation,
      message: e.target.value,
    } 
    this.setState({message: e.target.value})
    let text=state.src+" "+state.relation+" "+state.dest+": "+state.message
    if(this.props.onChange){
      this.props.onChange(text)
    }
  }
  render(){
    let {...other} = this.props
    return(
      <div>
        {super.render()}
        <TextArea onChange={this.onChange.bind(this)}/>
      </div>
    )
  }
}
