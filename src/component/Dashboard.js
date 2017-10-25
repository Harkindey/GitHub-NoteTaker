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

import Profile from './Profile';
import Repositories from './Repositories';
import api from '../utils/api';
import Notes from './Notes'

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
        this.props.navigator.push({
            title: "Profile",
            component: Profile,
            passProps: {userInfo: this.props.userInfo}
        });
    }

    gotoRepos (){
        api.getRepos(this.props.userInfo.login)
            .then((res) => {
                this.props.navigator.push({
                    title: "Repositories",
                    component: Repositories,
                    passProps: {
                        repos: res,
                        userInfo: this.props.userInfo
                    }
                });
            })
    }

    gotoNotes() {
        api.getNotes(this.props.userInfo.login)
            .then((res) => {
                const resp = (!res) ? {} : res
                this.props.navigator.push({
                    title: "Notes",
                    component: Notes,
                    passProps: {
                        userInfo: this.props.userInfo,
                        notes: resp
                    }
                });
            })
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
}
export default Dashboard;