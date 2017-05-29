export const SELECT_LIBRARY = 'SELECT_LIBRARY';


export function selectLibrary(libraryId){
	return {
		type: 'SELECT_LIBRARY',
		payload: libraryId
	},
}