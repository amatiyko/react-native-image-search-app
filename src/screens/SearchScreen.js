import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button 
} from 'react-native';
import { SearchContainer } from './../containers'

export default class SearchScreen extends Component {
    render() {
        return (
            <SearchContainer navigation={this.props.navigation} />
        )
    }
}