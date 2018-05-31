import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput,
    Button,
    Slider, 
    StyleSheet,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import { mainColor} from './../utils/consts';

export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            term: null,
            columns: 1,
            inputFocus: false,
        }
    }
    componentDidMount() {
        this.getKey();
    }
    

    render() {
        let btnStyle = [styles.button];
        let inputStyles = [styles.input]
        this.state.inputFocus && inputStyles.push(styles)
        return (
            <View style={styles.container}>
                <View style={styles.labelContainer}>
                    <Icon name='image' color={mainColor}/>
                    <Text style={styles.label}>Search term</Text>
                </View>
                <TextInput
                    style={[styles.input, this.state.inputFocus && styles.inputFocus || styles.inputBlur]}
                    value={this.state.term}
                    onChangeText={(term)=>this.setState({term})}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    placeholder='what field are you interested in?'
                    underlineColorAndroid='transparent'
                />
                <View style={styles.labelContainer}> 
                    <Icon name='view-column' color={mainColor}/>
                    <Text style={styles.label}>Columns: {this.state.columns}</Text>
                </View>
                <Slider
                    style={styles.slider} 
                    minimumValue={1}
                    value={this.state.columns}
                    maximumValue={5}
                    step={1}
                    onValueChange={(columns)=>this.setState({columns})}
                />
                <TouchableOpacity 
                    style={[styles.button,this.state.term && styles.buttonActive || styles.buttonDisabled]} 
                    onPress={this.handlePress} 
                    disabled={this.state.term ? false : true}>
                    <Icon name='search' color='white' />
                    <Text style={styles.buttonText}>SEARCH</Text>
                </TouchableOpacity>
            </View>
        );
    }
    handlePress=() => {
        if (this.state.term) {
            this.saveKey(this.state.term);
            this.props.navigation.navigate('Display', this.state)
        } else {
            return false;
        }
        
    }
    getKey = async () => {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            this.setState({term: value});
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
    onFocus = () => {
        this.setState({inputFocus: true})
    }
    onBlur = () => {
        this.setState({inputFocus: false})
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
        borderRadius: 6,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        fontWeight: '100'
    },
    inputFocus: {
        borderColor: mainColor
    },
    inputBlur: {
        borderColor: '#ccc'
    },
    slider: {
        width: 300,
        marginBottom: 5,
    },
    button: {
        marginTop: 5,
        marginBottom: 5,
        width: 300,
        height: 38,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonActive: {
        backgroundColor: mainColor,
    },
    buttonText: {
        color: 'white',
        marginLeft: 15,
        fontSize: 20,
        fontWeight: '100'
    },
    labelContainer: {
        flexDirection: 'row',
        height: 38,
        alignItems: 'center'
    },
    label: {
        marginTop: 5, 
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: '100',
    }
});