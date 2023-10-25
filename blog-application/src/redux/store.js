import { configureStore } from '@reduxjs/toolkit';
import blogApp from './blogApp';
export default configureStore({
	reducer: {
        blog:blogApp
		
	},
});
