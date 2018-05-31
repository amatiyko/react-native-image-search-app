import React, { Component } from 'react';
import { 
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Dimensions,
    AsyncStorage
} from 'react-native';
import Image from 'react-native-image-progress';
import { FetchingImages } from './../Actions';
import { connect } from 'react-redux';

class DisplayContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalContent: null
        }
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
                <ScrollView> 
                    <View style={styles.container}>
                        {app.data.map((item, index)=>this.renderImage(item, index, width))}
                    </View>
                </ScrollView>
        );
    }
    renderImage=(image, index, screenWidth) => {
        let width = screenWidth / (this.props.columns) - 5;
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        if (pattern.test(image.contentUrl)) {
            return (
                <View 
                    key={index}
                    style={[{width}, styles.imageContainer ]}>
                        <Image  
                            source={{uri: image.contentUrl}}
                            style={{width: width, height: width}}
                            resizeMode='cover'/>
                </View>
            )
        }
        return false;
    }
    handlePress = (modalContent) => {
        this.setState({showModal: !this.state.showModal, modalContent})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around'
    },
    imageContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        borderColor: 'black', 
        borderWidth: 1, 
        marginTop: 5, 
        marginBottom: 5
    }
});

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps, { FetchingImages})(DisplayContainer)