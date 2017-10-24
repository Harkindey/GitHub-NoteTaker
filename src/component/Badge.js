import React, { Component,PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

class Badge extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: this.props.userinfo.avartar_url }} />
                <Text style={styles.name}>{this.props.userInfo.name}</Text>
                <Text style={styles.handle}> {this.props.userInfo.login} </Text>
            </View>
        )
    }
};

Badge.propTypes = {
    userInfo: PropTypes.object.isRequired
};

const styles = {
    container: {
        backgroundColor: '#48BBEC',
        paddingBottom: 10
    },
    name: {
        alignSelf: 'center',
        fontSize: 21,
        marginTop: 10,
        marginBottom: 5,
        color: 'white'
    },
    handle: {
        alignSelf:'center',
        fontSize: 21,
        marginTop: 10,
        marginBottom: 5,
        color: 'white'
    },
    image: {
        height: 125,
        width: 125,
        borderRadius: 65,
        marginTop: 10,
        alignSelf: 'center'
    }
}

export default Badge;