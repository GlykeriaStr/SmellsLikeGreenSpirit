import React, { useState } from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import { WebView } from 'react-native-webview';

export default MyWeb = ({ route }) => {
  const { url } = route.params
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);

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
          uri: url,
        }}
        style={{ marginTop: 20 }}
        onLoadProgress={({ nativeEvent }) => {
          setProgress(nativeEvent.progress);
        }}
        onLoadEnd={() => {
          setLoaded(true);
        }}
      />
    </View>
  );
};
