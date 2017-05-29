import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		console.log(this.libraryList);
	}


	getLibraryList(){
		return this.props.librarylist.map(allData => 
		 	<Text key={allData.id}>{allData.title}</Text>
		 );
	}

	render(){
		return (
			<View>
				{this.getLibraryList()}
			</View>
		);
	}
}

function mapStateToProps(state){
		return { 
			librarylist : state.libraries
		};
}




export default connect(mapStateToProps)(LibraryList);