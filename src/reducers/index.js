import { combineReducers } from 'redux';
import LibraryReducer from './library_reducer';
import SelectionReducer from './selection_reducer';

export default combineReducers({
	libraries: LibraryReducer,
	currentLibraryId: SelectionReducer
});