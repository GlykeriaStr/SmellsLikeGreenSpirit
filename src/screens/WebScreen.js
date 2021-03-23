import React, { useState } from 'react';
import * as Progress from 'react-native-progress';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';

export default MyWeb = ({ route }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);
  const { result } = route.params;
  const code = `console.log('This is javascript')`;
  return (
    <View style={{flex: 1}}>
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
          uri: 'https://www.clevel.co.uk/offset-a-desired-amount-of-co2#gform_wrapper_7',
        }}
        style={{ marginTop: 20 }}
        onMessage={(event) => {
          alert(event.nativeEvent.title);
        }}
        javaScriptEnabled={true}
        injectedJavaScript={`console.log('hello')`}
        onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
        onLoadEnd={() => setLoaded(true)}
      />
    </View>
  );
};
