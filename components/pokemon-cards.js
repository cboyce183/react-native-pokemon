import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Navigator, NativeModules } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

export class Pokemoncard extends Component<{}> {
  render() {
    const id = this.props.url.match(/[0-9]+/gi)[1];
    return (
        <View style={styles.card}>
          <Image style={styles.background} source={require('../assets/Space.png')}/>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png'}}
          />
          <Text style={styles.text}>{this.props.name}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    left:0
  },
  card: {
    width: '100%',
    borderWidth: 1,
    marginTop: 3,
    borderColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    fontSize: 25
  }
});
