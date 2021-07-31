import React from 'react';
import compress from '../utils/encoder/encoder'
import CheckBox from './common/checkbox'
import TextArea from './common/textarea'
import Button from './common/button'
import {Tabs, TabHeader, TabPanel} from './common/tabs'
import SelectBox from './common/list'
import UmlSequence from './UmlSequence'
import Components from './components'

import './plantumleditor.scss'

export default class plantUmlEditor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      header: "@startuml\n",
      footer: "\n@enduml",
      lib_header: "",
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
        code: this.get_plantuml_code(state, state.text),
      }
    })
  }
  get_plantuml_code(state, text){
    return compress(state.header + state.lib_header + text + state.footer)
  }
  onSelect(e){
    let text = ""
    switch(e.target.id){
      case 'UML':
        break;
      case 'AWS':
        //その内、EC2内の参照にしたい
        //text += "!define AWSPUML /home/ec2-user/AWS-PlantUML\n"
        text += "!define AWSPUML https://raw.githubusercontent.com/milo-minderbinder/AWS-PlantUML/release/18-2-22/dist\n"
        text += "!includeurl AWSPUML/common.puml\n"
        break;
      case 'AWS-icons':
        text += "!define AWSPuml https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/v10.0/dist\n"
        text += "!includeurl AWSPuml/AWSCommon.puml!includeurl AWSPuml/AWSCommon.puml\n"
        break;
      default:
        console.log(e.target.id)
    }
    this.setState({lib_header: text})
  }
  onTextChange(e){
    this.setState((state)=>{
      return {
        text: e.target.value,
        code: this.get_plantuml_code(state, e.target.value),
      }
    })
  }
  onChangeRelation(text){
    this.setState((state)=>{
      return {
        text: text,
        code: this.get_plantuml_code(state, text),
      }
    })
  }
  render(){
    const server = "http://54.238.21.224:8080/plantuml/"
    const image_type = "svg"
    const url = server + image_type + "/" + this.state.code;
    const full_text = this.state.header + this.state.lib_header + this.state.text + this.state.footer
    return(
      <div className={'plantumleditor'}>
        <Components
          className={'components'}
          items={['UML', 'AWS', 'AWS-icons']}
          onChange={this.onSelect.bind(this)}
        />
        <img
          className={'image'}
          src={url}
        />
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
      </div>
    )
  }
}
