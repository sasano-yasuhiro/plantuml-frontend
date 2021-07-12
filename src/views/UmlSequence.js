import React from 'react';
import Relations from './relations';
import TextArea from './common/textarea'

export default class UmlSequence extends Relations{
  constructor(props){
    super(props);
    this.state['message']=''
    this.state['relations']=['->', '<-', '->>', '<<-']
  }
  componentDidMount(){
    super.componentDidMount()
    this.setState((state)=>{
      return {
        message: this.props.message,
      }
    })
  }
  changeRelation(id, value){
    let state = {
      src: this.state.src,
      dest: this.state.dest,
      relation: this.state.relation,
      message: this.state.message,
    }
    state[id]=value
    this.setState(state)
    let text=state.src+" "+state.relation+" "+state.dest+": "+state.message
    return text
  }
  render(){
    let {...other} = this.props
    return(
      <div>
        {super.render()}
        <TextArea
          id={'message'}
          value={this.state.message}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
