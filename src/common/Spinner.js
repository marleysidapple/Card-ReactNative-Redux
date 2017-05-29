import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

class Spinner extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<View style={styles.spinnerStyle}>
				<ActivityIndicator size={this.props.size || large} />
			</View>
		);
	}


}

const styles = {
	spinnerStyle :{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		paddingBottom: 5
	}

}

export default Spinner;