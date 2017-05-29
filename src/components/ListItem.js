import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardSection from './../common/CardSection';

class ListItem extends Component {

	render(){
		return (
			<CardSection>
				<Text style={styles.libraryTitle}>{this.props.library.title}</Text>
			</CardSection>
		);
	}

}

const styles = {
	libraryTitle : {
		paddingLeft: 5
	}
}

export default ListItem;