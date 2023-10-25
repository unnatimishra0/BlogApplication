import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { addblogs,editblog,deleteblog} from '../redux/blogApp';


const AddInfo = () => {
    const [title, setTitle] = useState('');
    const [categories,setCategories]=useState('');
    const [content,setContent]=useState('');


	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (title) {
			dispatch(
				addblogs({
					title: title,
                    categories:categories,
                    content:content
				})
			);
		}
	};
  return (
    <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>title</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add blog...'
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			></input>
            <input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add blog...'
				value={categories}
				onChange={(event) => setCategories(event.target.value)}
			></input>
             <input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add blog...'
				value={content}
				onChange={(event) => setContent(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
  )
}

export default AddInfo
