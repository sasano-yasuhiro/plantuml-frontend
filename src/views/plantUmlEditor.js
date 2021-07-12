import React from 'react';
import compress from '../utils/encoder/encoder'
import CheckBox from './common/checkbox'
import TextArea from './common/textarea'
import Button from './common/button'
import Tabs from './common/tabs'
import SelectBox from './common/list'
import UmlSequence from './UmlSequence'

import './plantumleditor.scss'

export default class plantUmlEditor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      header: "@startuml\n",
      footer: "\n@enduml",
      text: "Bob -> Alice : hello",
      code: "",
      isChecked: false,
      test: '',
    }
  }
  componentDidMount(){
    let state = this.state
    this.setState((state)=>{
      return {
        code: compress(state.header + state.text + state.footer),
      }
    })
  }
  onTextChange(e){
    this.setState((state)=>{
      return {
        text: e.target.value,
        code: compress(state.header + e.target.value + state.footer),
      }
    })
  }
  onChangeRelation(text){
    this.setState((state)=>{
      return {
        text: text,
        code: compress(state.header + text + state.footer),
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
    const full_text = this.state.header + this.state.text + this.state.footer
    return(
      <div>
        <SelectBox items={['UML', 'AWS']}/>
        {/*<Button label='refresh'/>*/}
        <img src={url}/>
        {/*<CheckBox label={'read only'} onChange={this.toggleCheck.bind(this)}/>*/}
        <Tabs>
          <TextArea className={'fulltext'} value={full_text} onChange={()=>{}}/>
          <TextArea value={this.state.text} onChange={this.onTextChange.bind(this)}/>
          <UmlSequence
            src={'Bob'}
            dest={'Alice'}
            relation={'->'}
            message={'hello'}
            components={['Bob', 'Alice']}
            onChange={this.onChangeRelation.bind(this)}
          />
        </Tabs>
      </div>
    )
  }
}
