import React from 'react';
import { Text } from 'react-native';
import Padrao from '../estilo/Padrao';

export default props => {
    let num = props.numero;
    console.log(num);
    
    let result = num % 2 == 0 ? 'Par': 'Impar';
    return <Text style={Padrao.ex}>{result}</Text>
}