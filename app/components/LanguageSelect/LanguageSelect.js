import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native';

export default class LanguageSelect extends Component {
  render() {
    return (
      <Picker
        selectedValue={this.props.language}
        onValueChange={(lang) => {this.props.onSelect(lang)}}
      >
        <Picker.Item label="Russian" value="ru" />
        <Picker.Item label="Spanish" value="es" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="Chinese" value="zh" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('LanguageSelect', () => LanguageSelect);
