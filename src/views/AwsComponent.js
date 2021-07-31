import React from 'react';
import Tree from './common/tree'
import {get_aws_components} from '../utils/get_aws_components'

export default class AwsComponents extends React.Component{
  constructor(props){
    super(props);
    this.state={
      files: get_aws_components(),
    }
  }
  render(){
    return(
      <Tree items={this.state.files}/>
    )
  }
}
