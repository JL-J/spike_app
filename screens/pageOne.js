import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Home extends React.Component {

  render() {
    return (
      <View>
        <Text>Home Page!</Text>
        <TextInput
          onChangeText = { this.props.nameHandler }
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Name"
        />
        <Button
          title="Next..."
          onPress={() => this.props.navigation.navigate('AddReceipt')}
        />
      </View>
    )
  }
}
