import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './../common/CardSection';
import * as actions from './../actions';

class ListItem extends Component {

	render(){
		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.id) }>
				<View>
					<CardSection>
						<Text style={styles.libraryTitle}>{this.props.library.title}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}

}

const styles = {
	libraryTitle : {
		paddingLeft: 5
	}
}

export default connect(null, actions)(ListItem);