import { combineReducers } from 'redux';
import LibraryReducer from './library_reducer';

export default combineReducers({
	libraries: LibraryReducer
});