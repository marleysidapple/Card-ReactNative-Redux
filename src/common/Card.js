import React, { Component } from 'react';
import { View, Text } from 'react-native';


class Card extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<View style={styles.cardSectionWrapper}>
				{this.props.children}
			</View>

		);
	}

}

const styles = {
	cardSectionWrapper: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		borderRadius: 2,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		margin: 10,
		padding: 10
	}
}

export default Card;