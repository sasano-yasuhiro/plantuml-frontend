import React from 'react';
import compress from '../utils/encoder/encoder'

export default class plantUmlEditor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text: "@startuml\nBob -> Alice : hello\n@enduml",
      code: "",
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
  render(){
    const server = "http://54.238.21.224:8080/plantuml/"
    const image_type = "svg"
    const url = server + image_type + "/" + this.state.code;
    return(
      <div>
        <button>Refresh</button>
        <img src={url}/>
        <textarea defaultValue={this.state.text} onChange={this.onTextChange.bind(this)}/>
      </div>
    )
  }
}
