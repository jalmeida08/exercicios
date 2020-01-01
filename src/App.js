import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Simples from './componentes/Simples';
import  Inverter, { MegaSena } from './componentes/Multi';
import ParOuImpar from './componentes/ParOuImpar';

export default class App extends Component{

	render(){
		return(
			<View style={styles.container}>
				<Simples ex='Nintendo' />
				<Inverter texto="Jefferson"/>
				<MegaSena numeros={6} />
				<ParOuImpar numero={ Math.floor(Math.random() * (100 - 1)) + 1} />
			</View>
		) 
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});