import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
import AddInfo from './AddInfo';
import {Provider} from 'react-redux'
import store from '../redux/store'
import { useState } from 'react';
const Hompage = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
 
  
  const [state,setState]=useState({
    data:[]
  })
  
  const display =()=>{
   
   
  }
  


  dispatch(AddInfo)
  return (

    <div style={{backgroundColor:'#FBA1B7',height:'100px'}} >
      <Provider store={store}>
      <main style={{backgroundColor:'#FBA1B7'}}>
        <Outlet />
      </main>
      </Provider>
      
      <h1 style={{textAlign: "center"}}>welcome to my blog app</h1>
       

    <ul className='list-group'>
   
  </ul>
  </div>
  
  )
    }

export default Hompage
