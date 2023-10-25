import { useEffect, useState } from "react"
import { Button, InputGroup, InputGroupText ,Placeholder} from "reactstrap"
import { useDispatch } from 'react-redux';
import { addInfo} from '../redux/blogApp';
import { addblogs } from "../redux/blogApp";
import {
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import { Link } from "react-router-dom";

function AddBlog(props) {
    const[bloglist,setbloglist]=useState("");
    const[blogs,setblogs]=useState([]);
    const dispatch =useDispatch([]);
    
    const [title, setTitle] = useState( '');
    const [categories, setCategories] = useState( '');
    const [content, setContent] = useState('');
   
    useEffect(()=>{
        localStorage.setItem("title",title)
        localStorage.setItem("categories",categories)
        localStorage.setItem("content",content)
    })
    
    
  
//     const storedTitle = localStorage.getItem('title');
//   const storedCategories = localStorage.getItem('categories');
//   const storedContent = localStorage.getItem('content');

//   const [title, setTitle] = useState(storedTitle ? JSON.parse(storedTitle) : '');
//   const [categories, setCategories] = useState(storedCategories ? JSON.parse(storedCategories) : '');
//   const [content, setContent] = useState(storedContent ? JSON.parse(storedContent) : '');

//   useEffect(() => {
//     // Store the state variables in local storage
//     localStorage.setItem('title', JSON.stringify(title));
//     localStorage.setItem('categories', JSON.stringify(categories));
//     localStorage.setItem('content', JSON.stringify(content));
//   }, [title, categories, content]);
    
  
    
   

    const [post,setPost]=useState({
        title:'',
        category: '',
        content : ''
    })
   

    const add = (e) => {
        e.preventDefault()
        if (title === '' && categories === '' && content === '') {
            alert("Please fill all the fields")
            return
        }
        props.addBlogHandler({title:title,Categories:categories,Content:content})
        
    }
    const adddetails = (title,categories,content) =>{
        dispatch(addblogs({title:title,categories:categories,content:content}))
     }
    // const feildChanged=(event)=>{
    //     setPost({...post,[event.target.name]:event.target.value})
    //     console.log(event.target.name)
    // }
  

    // const getLocalItems=()=>{
    //     let list =localStorage.getItem('list');

    // }
     return (
        
        <div className='ui main'>
            <h2>Add Blog</h2>
            {/* {JSON.stringify(post)} */}
            <Form className=' form' onSubmit={add}>
                <div className='feild'>
                    <FormGroup>
                    <Label>Title</Label>
                    <Input type='text' title='title' placeholder='title'
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                        />
                    <Label>Categories</Label>
                    <Input type='text' title='Categories' placeholder='categories' style={{height:'100px'}}
                        value={categories}
                        onChange={(e) => setCategories( e.target.value )}
                        />

                    <Label>Content</Label>

                    <InputGroup size='lg'>
                    <Input type='textarea' title='Content' placeholder='content' style={{height:'300px'}}
                        value={content}
                        onChange={(e) => setContent(e.target.value )} />
                    </InputGroup>
                    </FormGroup>
                    <Link to ='/viewAllBlog'><Button color="primary" onClick={()=> adddetails(title,categories,content)} > Add</Button></Link>


                </div>
            </Form>

        </div>
    
    )
}


export default AddBlog

