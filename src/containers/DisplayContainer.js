import React, { Component } from 'react';
import { 
    View,
    ScrollView,
    Text, 
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import { FetchingImages } from './../Actions';
import { connect } from 'react-redux';

class DisplayContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.FetchingImages(this.props.term); 
    }
    render() {
        let { width } = Dimensions.get('window');
        let { app } = this.props;

        if (app.isFetching) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Loading...</Text>
                </View>
            )
        } 

        return (
            <ScrollView contentContainerStyle={styles.container}> 
                {app.data.map((item, index)=>this.renderImage(item, index, width))}
            </ScrollView>
        );
    }
    renderImage=(image, index, screenWidth) => {
        let width = screenWidth / (this.props.columns) - 5;
        return (
            <View 
                key={index}
                style={{
                    width, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    borderColor: 'black', 
                    borderWidth: 1, 
                    marginTop: 5, 
                    marginBottom: 5
                }}>
                <Image  
                    source={{uri: image.contentUrl}}
                    style={{width: width-5, height: width-5}}
                    resizeMode='contain'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around'
    }
});

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps, { FetchingImages})(DisplayContainer)