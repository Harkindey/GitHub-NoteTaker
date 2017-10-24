import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

class Dashboard extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text> This is the Dashboard</Text>
                <Text>bean</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        marginTop: 65,
        flex: 1
    },
    image : {
        height: 350,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
}
export default Dashboard;