import React, {useState} from 'react';
import AddBlog from '../components/AddBlog';
import Header from '../components/Header';
// import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Route,Routes  }
    from "react-router-dom";
import Hompage from '../components/Hompage';
import ViewAllBlog from './ViewAllBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Edit from './Edit';

 

function App ()  {
  
  const [title,setTitle]=useState();
  const addBlogHandler=(title) =>{
    console.log(title);
   
  }
  return (
    <div>
      <Router>
      <Header/>
      <Routes>
      <Route  path="/" exact element={<Hompage/>}/>
      {/* <Route  path="addblog" exact component={AddBlog}/> */}
      <Route path="addblog"  exact element={<AddBlog addBlogHandler= {addBlogHandler}/>}/>
      <Route path="/viewAllBlog"  element={<ViewAllBlog/>}/>
      <Route path="/editblog/:title" element={<Edit/>}/>
      
      </Routes>
      
      

       {/* <Route path="/" component={Hompage}/> */}
       </Router>

    </div>
  )
}

export default App

