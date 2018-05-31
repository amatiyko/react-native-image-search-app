import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput,
    Button,
    Slider, 
    StyleSheet,
    AsyncStorage
} from 'react-native';

export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            term: null,
            columns: 1
        }
    }
    componentDidMount() {
        this.getKey();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Search term</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.term}
                    onChangeText={(term)=>this.setState({term})}
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
                    onValueChange={(columns)=>this.setState({columns})}
                />
                <Button
                    title='Search'
                    onPress={this.handlePress}
                />
            </View>
        );
    }
    handlePress=() => {
        this.saveKey(this.state.term);
        this.props.navigation.navigate('Display', this.state)
    }
    async getKey() {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            this.setState({term: value});
            console.log('123123123', value)
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }
    saveKey = async (value) => {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', value);
        } catch (error) {
            console.log("Error saving data" + error);
        }
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