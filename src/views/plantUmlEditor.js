import React from 'react';
import compress from '../utils/encoder/encoder'
import CheckBox from './common/checkbox'
import TextArea from './common/textarea'
import Button from './common/button'
import Tabs from './common/tabs'

import './plantumleditor.scss'

export default class plantUmlEditor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text: "@startuml\nBob -> Alice : hello\n@enduml",
      code: "",
      isChecked: false,
    }
  }
  componentDidMount(){
    this.setState((state)=>{
      return {
        code: compress(this.state.text),
      }
    })
  }
  onTextChange(e){
    this.setState((state)=>{
      return {
        text: e.target.value,
        code: compress(e.target.value),
      }
    })
  }
  toggleCheck(){
    this.setState(()=>{
      return({isChecked: !this.state.isChecked})
    })
  }
  render(){
    const server = "http://54.238.21.224:8080/plantuml/"
    const image_type = "svg"
    const url = server + image_type + "/" + this.state.code;
    return(
      <div>
        <Button label='refresh'/>
        <img src={url}/>
        <CheckBox onChange={this.toggleCheck.bind(this)}/>
        <Tabs>
          <TextArea defaultValue={this.state.text} onChange={this.onTextChange.bind(this)}/>
          <TextArea/>
          <TextArea/>
        </Tabs>
      </div>
    )
  }
}
