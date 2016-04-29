import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer'
import ActiveBookReducer from './ActiveBookReducer'

const rootReducer = combineReducers({
	activeBook: ActiveBookReducer,
  	books: BooksReducer
});

export default rootReducer;
