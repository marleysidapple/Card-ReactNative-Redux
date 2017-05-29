import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './../common/CardSection';
import * as actions from './../actions';

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

export default connect(null, actions)(ListItem);