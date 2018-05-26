import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput,
    Button,
    Slider, 
    StyleSheet } from 'react-native';

export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            term: null,
            columns: 1
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Search term</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.term}
                    onChangeText={(term)=>this.handleChange(term)}
                    placeholder='what field are you interested in?'
                    underlineColorAndroid='transparent'
                />
                <Text>Columns: {this.state.columns}</Text>
                <Slider
                style={styles.slider} 
                    minimumValue={1}
                    value={this.state.columns}
                    maximumValue={5}
                    step={1}
                    onValueChange={(value)=>this.handleChange(value)}
                />
                <Button
                    title='Search'
                    onPress={this.handlePress}
                />
            </View>
        );
    }
    handleChange=(data) => {
        switch (typeof data) {
            case 'number' :
                this.setState({columns: data});
                break;
            case 'string' : 
                this.setState({term: data});
                break;
            default: 
                return false;
        }
    }
    handlePress=() => {
        this.props.navigation.navigate('Display', this.state)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        width: 300,
        borderColor: 'black',
        borderRadius: 1000,
        marginTop: 5,
        marginBottom: 5,
        padding: 10
    },
    slider: {
        width: 300,
        marginTop: 5,
        marginBottom: 5
    },
    button: {
        marginTop: 5,
        marginBottom: 5
    },
    label: {
        marginTop: 5, 
        marginBottom: 5
    }
});