import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'


class BookList extends Component {
	
	renderList(){
		return this.props.books.map((book)=>{
			return (
				<li 
					key={book.title} 
					onClick={()=>this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			)
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state){
	// whatever is returned from this will be set to props of this component
	return {
		books: state.books
	}
}

// anything returned form this function will end up as props
// on the BookList container. In this case, the action creators that 
// will be nicely wrapped in a dispatch wrapper
function mapDispatchToProps(dispatch){
	// whenever selectBook is called, the result is be passed to all our reducers.
	// 'dispatch' dispatches an action down through all the reducers.
	// We are wrapping dispatch around all the action creators so that when the action creator is
	// triggered, they are 'dispatched' to all the reducers. 
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}



//Promotes BookList from component to container - it needs to have state put on its props
// and also to have all the nicely dispatch-wrapped action creators on its props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)





