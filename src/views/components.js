import React from 'react';
import {Tabs, TabHeader, TabPanel} from './common/tabs'
import UmlComponents from './UmlComponent'
import AwsComponents from './AwsComponent'

export default class Components extends React.Component{
  constructor(props){
    super(props);
    this.state={
      components: [],
      tree: {},
    }
  }
  render(){
    let key=0
    let items=this.props.items
    return(
      <Tabs onChange={this.props.onChange}>
        <TabHeader>
          {items.map(item =>{
            return <div key={key++} id={item}>{item}</div>
          })}
        </TabHeader>
        <TabPanel id={items[0]}>
          <UmlComponents/>
        </TabPanel>
        <TabPanel id={items[1]}>
          <AwsComponents/>
        </TabPanel>
        <TabPanel id={items[2]}>
          <AwsComponents/>
        </TabPanel>
      </Tabs>
    )
  }
}
