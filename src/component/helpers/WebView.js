import React, { Component,PropTypes } from 'react';
import {
  View,
  WebView
} from 'react-native';

class WEBVIEW extends Component {
    render () {
        return (
            <View style={styles.container}>
                <WebView url={this.props.url} />
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor : '#F6F6EF',
        flexDirection: 'column'
    }
}
export default WEBVIEW