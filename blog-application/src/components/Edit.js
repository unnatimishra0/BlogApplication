import React from 'react'
import { useState } from 'react'
import { Button, InputGroup} from "reactstrap"
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { editblog } from '../redux/blogApp';
import {
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

const Edit = () => {
    // const [title,setTitle]=useState('')
    const {title}=useParams()
    const [categories,setCategories]=useState('')
    const [content,setContent]=useState('')
    const dispatch =useDispatch();



    const editdetails =()=>{
        dispatch(editblog({title:title,categories:categories,content:content}))

    }
  return (
    <div className='ui main'>
            <h2>Add Blog</h2>
            {/* {JSON.stringify(post)} */}
            <Form className=' form' >
                <div className='feild'>
                    <FormGroup>
                    <Label>Title</Label>
                    <Input type='text' title='title' placeholder='title'
                        value={title}
                        readOnly                        />
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
                    <Link to ='/viewAllBlog'><Button color="primary" onClick={()=> editdetails(title,categories,content)}> Submit</Button></Link>


                </div>
            </Form>

        </div>
    
  )
}

export default Edit
