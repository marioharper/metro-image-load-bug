import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        {/*this will not display*/}
        <Image source={require('testmodule/cat.jpg')} />
        {/*this will display*/}
        <Text>{require('testmodule')}</Text>
      </View>
    );
  }
}
