import React, { useState } from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import { WebView } from 'react-native-webview';

export default MyWeb = ({ route }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);
  const { resultInTonnes } = route.params;
  const code = `let inputBox = document.getElementById('input_7_3');
inputBox.value = ${resultInTonnes};
inputBox.dispatchEvent(new KeyboardEvent('keydown',{'key':'a'}));`;

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
            'https://www.clevel.co.uk/offset-a-desired-amount-of-co2/#gform_wrapper_7',
        }}
        style={{ marginTop: 20 }}
        onMessage={() => console.log('onMessage')}
        injectedJavaScript={code}
        onLoadProgress={({ nativeEvent }) => {
          setProgress(nativeEvent.progress);
        }}
        onLoadEnd={() => {
          setLoaded(true), console.log('onloadend');
        }}
      />
    </View>
  );
};
