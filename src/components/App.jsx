import React, { useState ,useEffect,useRef} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import EventTwoTone from "@mui/icons-material/EventTwoTone";

function App() {
  const ref=useRef();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [items, setItems] = useState([]);
  
  function handleTitle(evt) {
    let value = evt.target.value;
   console.log(value);
    setTitle(value);
  }

  function deleteNote(id){
    setItems((prev)=>{
      return    (   prev.filter((item)=> item.id!==id)
      )
    })
  }

  function handleContent(evt) {
    let value = evt.target.value;
    setContent(value);
  }
  function addItems(evt) {
   if(evt){ evt.preventDefault();}
    if(title === "" || content === ""){
      alert("Take a note");
    }
   else if(title !== "" && content !== "")  {
      let newobj = { id: Date.now(), heading: title, note: content };
      setItems((prev) => {
        return [...prev, newobj];
      });
      setTitle("");
    setContent("");
    ref.current.focus();
    }
    
  }

  useEffect(()=>{

    function handlePress(evt){
      if(evt.key==="Enter"){
        evt.preventDefault();
        addItems();
        console.log('add');
      }
    }
    document.addEventListener("keypress",handlePress);
    

    return ()=>{
      document.removeEventListener("keypress",handlePress);
    
    }




  },[title,content])
  return (
    <div className="wrapper">
    <div className="content">
      <Header />
      <CreateArea
        title={handleTitle}
        titleValue={title}
        content={handleContent}
        contentValue={content}
        addItem={addItems}
        ref={ref}
      />
      <Note item={items}  remove={deleteNote}/>
     
      </div>
      <Footer />
    </div>
  );
}

export default App;
