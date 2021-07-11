import React from 'react';
import TextArea from './common/textarea'
import SelectBox from './common/list'
import Button from './common/button'

export default class Relations extends React.Component{
  constructor(props){
    super(props);
    this.state={
      src: '',
      dest: '',
      relation: '',
      components: [],
      relations: [],
    }
    this.text = ''
  }
  componentDidMount(){
    this.setState((state)=>{
      return {
        src: this.props.src,
        dest: this.props.dest,
        relation: this.props.relation,
        components: this.props.components,
        relations: this.props.relations,
      }
    })
  }
  onSelect(e){
    let {id, value} = e.target
    let state = {
      src: this.state.src,
      dest: this.state.dest,
      relation: this.state.relation,
    }
    state[id]=value
    this.setState(state)
    let text=state.src+" "+state.relation+" "+state.dest
    if(this.props.onChange){
      this.props.onChange(text)
    }
  }
  render(){
    return(
      <div>
        <SelectBox
          id={"src"}
          value={this.state.src}
          onChange={this.onSelect.bind(this)}
          items={this.state.components}
        />
        <SelectBox
          id={"relation"}
          value={this.state.relation}
          onChange={this.onSelect.bind(this)}
          items={this.state.relations}
        />
        <SelectBox
          id={"dest"}
          value={this.state.dest}
          onChange={this.onSelect.bind(this)}
          items={this.state.components}
        />
      </div>
    )
  }
}
