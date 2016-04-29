export function selectBook(book){
	// selectBook is an action creator
	// it needs to return an action with a type and (sometimes) a payload
	return {
		// type describes the purpose of the action
		type: "BOOK_SELECTED",
		payload: book
	}
}