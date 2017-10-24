import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image
} from 'react-native';

class Dashboard extends Component {
    makeBackground(btn){
        return {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1,
            backgroundColor : {
                0: '#48BBEC',
                1: '#E77AAE',
                2:'#758BF4'
            }[btn]
        }
    }

    gotoProfile() {
        console.log('Going to profile page')
    }

    gotoRepos (){
        console.log('GOing to Repos page')
    }

    gotoNotes() {
        console.log("Going to Notes")
    }
    render () {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
                <TouchableHighlight
                    style={this.makeBackground(0)} 
                    onPress={this.gotoProfile.bind(this)}
                    underlayColor='#88D4F5'>
                        <Text style={styles.buttonText}>View Profile</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(1)} 
                    onPress={this.gotoRepos.bind(this)}
                    underlayColor='#88D4F5'>
                        <Text style={styles.buttonText}>View Repositories</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    style={this.makeBackground(2)}
                    onPress={this.gotoNotes.bind(this)}
                    underlayColor='#88D4F5'>
                        <Text style={styles.buttonText}>Create Notes</Text>
                </TouchableHighlight>
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
    },
    obj:{
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#E77AAE'
    }
}
export default Dashboard;