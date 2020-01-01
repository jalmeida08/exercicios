import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples';
import Inverter, { MegaSena } from './componentes/Multi';
import ParOuImpar from './componentes/ParOuImpar';

export default createDrawerNavigator({

    MegaSena: {
        screen: () => <MegaSena numeros={6} /> ,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto="Jefferson"/>
    },
    ParImpar: {
        screen: () => <ParOuImpar numero={ Math.floor(Math.random() * (100 - 1)) + 1} />,
        navigationOptions: { title:'Par e Ímpar' }
    },
    Simples: {
        screen: () => <Simples ex='Nintendo' />
    }

}, { drawerWidth: 300, drawerPosition: "left"});