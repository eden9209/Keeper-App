import React,{useState} from "react";

  function CreateArea(props)
  {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");

    function handleChangeOne(event)
    {
     const newTitle=event.target.value;
      setTitle(newTitle);
    }

    function handleChangeTwo(event)
    {
     const newContent=event.target.value;
      setContent(newContent);
    }
  function submitNote(event)
  {
    props.onADD(title,content);
    setContent("");
    setTitle("");
    event.preventDefault(); //form have a default reload when we clicked
  }

  return( <div>
  <form>
  <input onChange={handleChangeOne} value={title} name="title" placeholder="Title" />
  <textarea onChange={handleChangeTwo} value={content} name="content" placeholder="Take a note..." rows="3" />
  <button onClick={submitNote}>Add</button>
  </form>
  </div> );
}

export default CreateArea;
