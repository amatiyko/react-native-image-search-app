import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button 
} from 'react-native';
import { DisplayContainer } from './../containers';

export default class DisplayScreen extends Component {
    render() {
        let { navigation: nav } = this.props
        let term = nav.getParam('term');
        let columns = nav.getParam('columns');
        return (
            <DisplayContainer term={term} columns={columns}  />
        )  
    }
}