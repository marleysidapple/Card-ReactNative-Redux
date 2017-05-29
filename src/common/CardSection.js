import React, { Component } from 'react';
import { Text, View } from 'react-native';


class CardSection extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
				<View style={styles.cardSectionContainerStyle}>	
					{this.props.children}
				</View>
			);
	}

}

const styles = {
	cardSectionContainerStyle : {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'

	}
};

export default CardSection;