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
import api from '../utils/api'
import Dashboard from './Dashboard' 

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
          username: '',
          isLoading: false,
          error: false
        }
      }

      handleChange(event) {
        this.setState({
            username: event.nativeEvent.text
        })
      }

      handleSubmit() {
        //update our indocatorIOS spinner
        this.setState({
            isLoading: true
        });
        api.getRepos(this.state.username)
            .then((res) => {
                console.log(res)
                if (res.message === 'NOT FOUND'){
                    this.setState({
                        error: 'User not Found',
                        isLoading: false
                    })
                } else {
                    this.props.navigator.push({
                        title: res.name || "Select an Option",
                        component: Dashboard,
                        passProps: {userInfo: res}
                    });
                    this.state({
                        isLoading: false,
                        error: false,
                        username: ''
                    })
                }
            });
        //fetch data from github
        //reroute to the next passing in the guthub info
      }

    render(){
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.title}> Search For a Github User</Text>
                <TextInput 
                style={styles.searchInput}
                value={this.state.username}
                onChange={this.handleChange.bind(this)} />
                <TouchableHighlight 
                    style= {styles.button}
                    onPress={this.handleSubmit.bind(this)}
                    underlayColor="white">
                    <Text style={styles.buttonText}>SEARCH</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
}
export default Main;