import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button, 
    StyleSheet 
} from 'react-native';

export default class SearchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Search Screen</Text>
                <Button
                    title='Search'
                    onPress={()=>this.props.navigation.navigate('Display')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button :{
        marginTop: 20
    }
});