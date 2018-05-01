import React from 'react';
import { Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mytext: ''};
  }
  render() {
    return (
      <View style={{padding: 40}}>
        <Text>Hello Rehan</Text>
        <Text>Enter text below</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter text here!"
          onChangeText={(text) => this.setState({mytext: text})}
        />
        <Text>{this.state.mytext}</Text>
      </View>
    );
  }
}

