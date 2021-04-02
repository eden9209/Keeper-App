import React from "react";

function Note(props)
{
  function handleClick()
  {
    props.Ondelete(props.id);
  }

  return <div class="note">
   <h1> {props.title}</h1>
  <p> {props.content }</p>
  <button onClick={handleClick}>delete</button>
  </div>;

}
export default Note;
