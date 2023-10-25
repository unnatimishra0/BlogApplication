import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import { deleteblog } from '../redux/blogApp';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const ViewAllBlog = () => {
 
    const [likes, setLikes] = useState(0);

    const handleLikeClick = () => {
      setLikes(likes + 1);
    };
  

  const data = useSelector((state) => {
    return state.blog;
  })
  console.log(data)
  const dispatch =useDispatch();

  const deleteblogs = (data) =>{
    console.log(data)
    dispatch(deleteblog({title:data}))
 }
//   const[like,setLike]=useState(456);
//   const[isLike,setIsLike]=useState(false);
//  onButtonClick=()=>{
//   setLike(like+(isLike ? -1 : 1));
//   setIsLike(!isLike);
//  }

  return (
    <>
      <div style={{ textAlign: "center" }} > Welcome To My Blog Application</div>

      <div >
        {
          data.map((blog, id) => {
            return <li key={id}>

              <div style={{ margin:"5%",border: "5px black solid", borderRadius: "3px" }} >
                <Button  onClick={()=>deleteblogs(blog.title)} style={{float:"right",margin:"4px"}}>Delete</Button>
                <h2 style={{ marginLeft: "10px", textDecoration: "underline" }}>{blog.title}</h2>
                <h4 style={{ marginLeft: "10px", textDecoration: "solid" }}>{blog.categories}</h4>
                <div style={{padding:"2%", border: "3px grey solid", borderRadius: "10px", margin: "5px" }}>
                  <p >{blog.content} </p>
                </div>
                <Link to={`/editblog/${blog.title}`}><Button  style={{margin:"5px"}}>Edit</Button></Link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <i class="fa fa-heart" onClick={handleLikeClick}></i>

                {/* <button onClick={handleLikeClick}>Like</button> */}
      <p>Likes: {likes}</p>
               

              </div>



              {/* {blog} */}
            </li>
          })
        }
      </div>
      {/* {
      data.map((blog,id) => {
        return <li key={id}>
          {blog}
        </li>
      })
   } */}
    </>
  )
  }

export default ViewAllBlog
