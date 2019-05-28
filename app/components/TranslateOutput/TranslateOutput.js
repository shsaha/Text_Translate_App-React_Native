import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TranslateOutput extends Component {
  render() {
    return (
      <View>
        <Text style={styles.translatedText}>
          {this.props.translation}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  translatedText:{
    fontSize: 23,
    textAlign: 'center',
    color:'#656565'
  }
});

AppRegistry.registerComponent('TranslateOutput', () => TranslateOutput);
