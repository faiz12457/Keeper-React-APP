import React from "react";
import Notecontent from "./noteContent";

function Note(props) {
  return(
    <div>
   {props.item.map((item)=>{
    return( <Notecontent key={item.id} title={item.heading} content={item.note} id={item.id} delete={props.remove} />)

   })}
   </div>
  )

}


export default Note;
