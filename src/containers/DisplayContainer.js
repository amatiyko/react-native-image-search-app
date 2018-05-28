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
        console.log(this.props);
        this.props.FetchingImages(this.props.term); 
        console.log(this.props);
    }
    render() {
        let images = [
            {url: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'},
            {url: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'},
            {url: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'},
            {url: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'},
            {url: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'},
            {url: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'},
            {url: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'},
            {url: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'},
            {url: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'}
        ];
        let { width } = Dimensions.get('window');
        return (
            <ScrollView contentContainerStyle={styles.container}> 
                {images.map((item, index)=>this.renderImage(item, index, width))}
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
                    source={{uri: image.url}}
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