
import { BrowserRouter, Routes, Route, useParams, useSearchParams} from "react-router-dom";

export default function IndivPost(){

  const servUrl = 'https://db-database-app-server.onrender.com';

  const { post } = useParams();

  //const [searchParams] = useSearchParams();
  //const postId = searchParams.get({post});
  //console.log(postId);

  async function getPost() {
    
    const obj = {id: {post}};
    const fullUrl = servUrl + '/indivpost';  // obj.id.post
    
    const response = await fetch(fullUrl);
    const jsonData = response.json();
    console.log(jsonData);
  }

  //getPost();

  return (
    <>
    <h2>Post ID: {(post)}</h2>
    
    
    
    </>
  );


}




