import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { Navigator, NativeModules } from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import { Pokemoncard } from './components/pokemon-cards.js';

const uiTheme = {
    palette: {
        primaryColor: 'rgb(34, 34, 34)',
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

const instructions = Platform.select({ //Some instructions for using the simulator
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
    }
    fetch('http://localhost:4000/')
    .then( response => response.json())
    .then( result => this.setState({list: result}) );
  }

  renderPokemon () {
    return this.state.list.map( el => {
      return (
        <Pokemoncard {...el}/>
      )
    });
  }

  render() {
    if (this.state.list.length) return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={{top:20, zIndex:1000}}>
          <Toolbar
            leftElement="menu"
            centerElement="Pokemon"
            searchable={{
              autofocus: true,
              placeholder: 'Search...',
            }}
          />
        </View>
        <ScrollView style={styles.scrollview}>
          <View style={styles.container}>
            {this.renderPokemon()}
          </View>
        </ScrollView>
      </ThemeProvider>
    );
    else return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={{top:20}}>
          <Toolbar
            leftElement="menu"
            centerElement="Pokemon"
            searchable={{
              autofocus: true,
              placeholder: 'Search...',
            }}
          />
        </View>
        <View style={styles.container}>

        </View>
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top:20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    height:'100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'rgb(255, 255, 255)'
  },
  instructions: {
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    marginBottom: 5,
  },
  scrollview: {
    backgroundColor: 'black'
  }
});
