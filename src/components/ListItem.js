import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './../common/CardSection';
import * as actions from './../actions';

class ListItem extends Component {


	componentWillUpdate(){
		LayoutAnimation.spring();
	}

	renderDescription(){
		if(this.props.expanded){
			return (
				<CardSection>
					<Text>
						{this.props.library.description}
					</Text>
				</CardSection>
			);
		}
	}

	render(){
		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.id) }>
				<View>
					<CardSection>
						<Text style={styles.libraryTitle}>{this.props.library.title}</Text>
					</CardSection>
					{this.renderDescription()}
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

/*
function mapStateToProps(state){
	return {
		currentLibraryId: state.currentLibraryId
	};
}
*/

function mapStateToProps(state, ownProps){
	return {
		expanded: state.currentLibraryId === ownProps.library.id ? true: false
	};
}

export default connect(mapStateToProps, actions)(ListItem);