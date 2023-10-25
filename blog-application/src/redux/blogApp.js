import { createSlice } from '@reduxjs/toolkit';
const initialState=[]

export const blogApp = createSlice({
	name: 'blog',
	initialState,
	reducers: {
		addblogs: (state, action) => {
			state.push(action.payload);
		},
		editblog: (state, action) => {
			const index = state.findIndex((blog) => blog.title=== action.payload.title);
			state[index].categories=action.payload.categories;
			 state[index].content = action.payload.content;

		},
		deleteblog: (state, action) => {
			return state.filter((blog) => blog.title!== action.payload.title);
		}
	},
});


export const { addblogs ,editblog,deleteblog} = blogApp.actions;
// export const getAllBlogs = (state) => state.blogs.title;
export default blogApp.reducer;