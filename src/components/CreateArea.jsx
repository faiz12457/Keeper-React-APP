import React, { useState,forwardRef ,useEffect} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

 const CreateArea =forwardRef((props,ref)=> {
  const[zoom,setZoom]=useState(false);
  function handleZoom(){
    setZoom(true)
  }

  useEffect(() => {
    if (zoom===true && ref.current) {
      ref.current.focus();
    }
  }, [zoom, ref]);
  return (
    <div>
      <form className="create-note">
       {zoom &&   <input
          name="title"
          placeholder="Title"
          onChange={props.title}
          value={props.titleValue}
          ref={ref}
        /> }
        <textarea onClick={handleZoom}
          name="content"
          placeholder="Take a note..."
          rows={zoom?"3":"1"}
          onChange={props.content}
          value={props.contentValue}
        />
        <Zoom  in={zoom} >
        <Fab onClick={props.addItem}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
});

export default CreateArea;
