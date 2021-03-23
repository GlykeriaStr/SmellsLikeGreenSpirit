import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    console.log('inside my web');
    return (
      <WebView
        source={{ uri: 'https://www.clevel.co.uk/offset-a-desired-amount-of-co2/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default MyWeb