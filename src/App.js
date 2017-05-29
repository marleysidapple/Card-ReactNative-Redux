import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './common/Header';
import LibraryList from './components/LibraryList';

class App extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<Provider store={createStore(reducers)}>
				<View style={{flex: 1}}>
					<Header headerText={'Card'} />
					<LibraryList />
				</View>
			</Provider>
		);
	}
}

export default App;