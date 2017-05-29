import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.dataSource = ds.cloneWithRows(this.props.librarylist);
	}


	/*
	getLibraryList(){
		return this.props.librarylist.map(allData => 
			<View>
		 	<Text key={allData.id}>{allData.title}</Text>
		 	</View>
		 );
	}
	*/

	renderRow(library){
		return <ListItem  library={library}/>
	}

	render(){
		return (
			<View>
				<ListView
         		 dataSource={this.dataSource}
         		 renderRow={this.renderRow} 
         		 />
			</View>
		);
	}
}

function mapStateToProps(state){
		return { 
			librarylist : state.libraries
		};
}

const styles = {
	cardStyle: {
		margin: 10,
		padding: 10	
	}
}




export default connect(mapStateToProps)(LibraryList);