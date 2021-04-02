import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

function App()
{

  const [titles,setTitles]=useState([]);
  const [contents,setContents]=useState([]);


  function addNote(title,content)
  {
    setTitles((prevTitles)=>{
      return [...prevTitles,title] ;
    });

    setContents((prevContents)=>{
      return [...prevContents,content] ;
    });

  }

  function handleOndelete(id)
  {
    setTitles(prevTitles=>{
      return prevTitles.filter((titleItem,index)=>{
        return index !== id;

      }
    );
    });

    setContents(prevContents=>{
      return prevContents.filter((prevItem,index)=>{
        return index !== id;

      }
    );
    });



  }

  return <div>
    <Header/>
    <CreateArea
     onADD={addNote}
     />
    {titles.map((titleItem,index)=>{
      const content=contents[index];
       return <Note
       id={index}
       Ondelete={handleOndelete}
       title={titleItem}
       content={content}
       />
     })}
    <Footer />
    </div>
  ;
}

export default App;
