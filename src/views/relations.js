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
  }
  componentDidMount(){
    this.setState((state)=>{
      return {
        src: this.props.src,
        dest: this.props.dest,
        relation: this.props.relation,
        components: this.props.components,
      }
    })
  }
  onChange(e){
    let {id, value} = e.target
    let text = this.changeRelation(id, value)
    if(this.props.onChange){
      this.props.onChange(text)
    }
  }
  // absolute method
  changeRelation(id, value){
    console.assert("not implement method")
    return ""
  }
  render(){
    return(
      <div>
        <SelectBox
          id={"src"}
          value={this.state.src}
          onChange={this.onChange.bind(this)}
          items={this.state.components}
        />
        <SelectBox
          id={"relation"}
          value={this.state.relation}
          onChange={this.onChange.bind(this)}
          items={this.state.relations}
        />
        <SelectBox
          id={"dest"}
          value={this.state.dest}
          onChange={this.onChange.bind(this)}
          items={this.state.components}
        />
      </div>
    )
  }
}
