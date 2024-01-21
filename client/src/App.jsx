import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home.jsx';
import IndivPost from './pages/IndivPost.jsx';
import ListPosts from './pages/ListPosts.jsx';
// import Post from './pages/Post.jsx';
import './App.css'





export default function App() {

  const [dataFromDb, getDataFromDb] = useState(() => {return []});
  const [allPostsRead, setPostsRead] = useState(false);

  const [form, setForm] = useState({
      id: "",
      username: "",
      subject: "",
      category: "",
      message: ""
  });


  const isServUrlLocal = false;
  let servUrl = '';
  servUrl = (isServUrlLocal)? 'http://localhost:8080':'https://db-database-app-server.onrender.com';

  //const page="home";

  useEffect(() => {
    setPostsRead(true);
    console.log("Posts read");
  }, [allPostsRead]);

  function setDataFromQuery(data){
    getDataFromDb(()=>JSON.parse(JSON.stringify(data)));
    //if (!allPostsRead) getDataFromDb(()=>JSON.parse(JSON.stringify(data)));
     // above line works, but enters callback hell !!!
  }

  return (
    <>
      <Header />
        <div id="wrapper">
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/categories" element={<Categories/>} /> */}
            <Route path="/home" element={<Home/>} />
             <Route path="/indivpost" element={<IndivPost/>} /> 
            <Route path="/indivpost/:post" element={<IndivPost />} />
            <Route path="/listposts" element={<ListPosts
              servUrl={servUrl}
              allPostsRead = {allPostsRead}
              setPostsRead = {setPostsRead}
              dataFromDb={dataFromDb}
              getDataFromDb={getDataFromDb}
              setDataFromQuery={setDataFromQuery}
                />} />

            {/* <Route path="/posts" element={<Post
              servUrl={servUrl} 
              form={form} 
              setForm={setForm}
              allPostsRead = {allPostsRead}
              setPostsRead = {setPostsRead}
              dataFromDb={dataFromDb}
              getDataFromDb={getDataFromDb}
              setDataFromQuery={setDataFromQuery}
            />} /> */}

             
            <Route path="*" element={<NotFound/>} />
          </Routes>

          {/* {(page==='home')?<Home />: null} */}

{/*
          {(page==='listposts')?<ListPosts 

            servUrl={servUrl} 
            allPostsRead = {allPostsRead}
            setPostsRead = {setPostsRead}
            dataFromDb={dataFromDb}
            getDataFromDb={getDataFromDb}
            setDataFromQuery={setDataFromQuery}
            />: null
          }
        */}
            
          {/*(page==='categories')?<Categories />: null*/}
        </div>
      <Footer />
    </>
  )
}