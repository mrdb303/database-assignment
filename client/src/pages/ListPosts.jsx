import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Outlet } from "react-router-dom";
//import {useParams} from 'react-router-dom'
import IndivPost from "./IndivPost";

export default function ListPosts({servUrl, dataFromDb, 
  getDataFromDb, setPostsRead, allPostsRead, setDataFromQuery}){

  const navigate = useNavigate();

// dataFromDb={dataFromDb} getDataFromDb={getDataFromDb} 
  // let jsonData = [];
  let allEntries = [];


//#guestbookposts = .post-list 

  async function getDataFromPageRequest(url) {
    
    const fullUrl = servUrl + url;
    const response = await fetch(fullUrl);
    allEntries = await response.json();

    () => setPostsRead(true);
    setDataFromQuery(allEntries);
  }

  getDataFromPageRequest('/listposts');


  // function handleClick(event){
    
  //   event.preventDefault();
  //   const location = "/posts/" + event.target.value;
  //   //const location = "/posts/" + event.target.value;
  //   navigate(location);
  // }


  

  const renderListOfUserPosts = () => {
    return(
      <>
      {dataFromDb.map((postInstance ,index) => 
      <section key={"sc" + postInstance.id}>
        <form className="post-list" key={"pl" + postInstance.id}>
          <label key={"titl" + postInstance.id}>Subject Title:</label><br/>
          <input key={"inpa" + postInstance.id} name="subject" 
            readOnly="readOnly"
            value={postInstance.title} 
          />

          <br/><br/>
          <label key={"lbl" + postInstance.id}>User:</label><br/>
          <input key={"inpb" + postInstance.id} name="username" 
            readOnly="readOnly"
            value={postInstance.user}
          />
          
          <br/><br/>
          <button key={"btn"+postInstance.id} value={postInstance.id} ><a className="btn" href={"http://127.0.0.1:5173/indivpost/" + postInstance.id}>View</a></button>
          </form>
        </section>)}
      </>
    ); 
  }


  

  return (
    <>
      <div className="heading-box"><h2>List of posts:</h2></div>

      <div id="guestbookContainer">
      {(allPostsRead) &&
        renderListOfUserPosts()}
      </div>
    </>
  );
}

