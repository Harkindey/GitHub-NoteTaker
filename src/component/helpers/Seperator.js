import React, { Component,PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

class Seperator extends Component{
    render () {
        return (
            <View style={styles.seperator} />
        )
    }
}

const styles = {
    seperator : {
        height: 1,
        backgroundColor: '#E4E4E4',
        flex: 1,
        marginLeft: 15
    }
};

export default Seperator;
