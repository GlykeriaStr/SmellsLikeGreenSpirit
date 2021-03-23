import React, { useState } from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import { WebView } from 'react-native-webview';

export default MyWeb = ({ route }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);
  const { result } = route.params;
  const code = "console.log('This is javascript')";
  return (
    <View style={{ flex: 1 }}>
      {!isLoaded ? (
        <Progress.Bar
          progress={progress}
          width={null}
          borderWidth={0}
          borderRadius={0}
          color="#4f8b3a"
        />
      ) : null}
      <WebView
        source={{
          uri:
            'https://www.clevel.co.uk/offset-a-desired-amount-of-co2#gform_wrapper_7',
        }}
        style={{ marginTop: 20 }}
        onMessage={() => console.log('onMessage')}
        // javaScriptEnabled={true}
        injectedJavaScript="window.alert('hello')"
        onLoadProgress={({ nativeEvent }) => {
          setProgress(nativeEvent.progress), console.log('onloadprogress');
        }}
        onLoadEnd={() => {
          setLoaded(true), console.log('onloadend');
        }}
      />
    </View>
  );
};
