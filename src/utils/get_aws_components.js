import {awsIcons} from './aws_icon' 

export function get_aws_components(){
  let components = get_icon_files(awsIcons[0].contents)
  return components
}

function get_icon_files(contents){
  let components = {}
  contents.map((obj)=>{
    if(obj.type == "directory"){
      if(!(obj.name in components)){
        components[obj.name]={}
      }
      components[obj.name] = get_icon_files(obj.contents)
    }else if(obj.type == "file"){
      if(!("file" in components)){
        components["file"]=[]
      }
      components["file"].push(obj.name)
    }
  })
  return components
}
