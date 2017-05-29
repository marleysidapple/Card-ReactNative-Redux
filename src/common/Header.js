import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<View style={styles.headerContainer}>
				<Text style={styles.headerOptionWrapper}>Back</Text>
				<Text style={styles.headerTitleWrapper}>{this.props.headerText}</Text>
				<Text style={styles.headerOptionWrapper}>Forward</Text>
			</View>
		);
	}
}

const styles = {
	headerContainer: {
		height: 64,
		paddingTop: 30,
		paddingBottom: 10,
		backgroundColor: '#f8f8f8',
		flexDirection: 'row',
		shadowColor: '#000',
	  	shadowOffset: {width: 0, height: 2},
	  	shadowOpacity: 0.2,
	  	elevation: 2,
	  	position: 'relative'
	},

	headerTitleWrapper: {
		flex: 1,
		textAlign: 'center',
	},

	headerOptionWrapper: {
		textAlign: 'center',
		width: 70
	}
}

export default Header;