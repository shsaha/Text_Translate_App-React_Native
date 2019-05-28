import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TranslateInput from './app/components/TranslateInput/TranslateInput';
import TranslateOutput from './app/components/TranslateOutput/TranslateOutput';
import LanguageSelect from './app/components/LanguageSelect/LanguageSelect';

export default class ltranslate extends Component {
  constructor(){
    super();
    this.state = {
      translatedText:'',
      language:'ru'
    }
  }

  selectLanguage(lang){
    this.setState({language:lang}, () => {
      console.log('Language Switched: '+lang);
    });
  }

  translateText(text){
    fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170329T180255Z.3c18d2dc7b65d525.f23ed9a9efa992bded4ef96334e3c154f61d2dea&lang='+this.state.language+'&text='+text)
      .then((response) => {
        let res = JSON.parse(response._bodyText);
        this.setState({translatedText: res.text[0]});
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <LanguageSelect language={this.state.language} onSelect={this.selectLanguage.bind(this)} />
        <TranslateInput onSubmit={this.translateText.bind(this)} />
        <TranslateOutput translation={this.state.translatedText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ltranslate', () => ltranslate);
