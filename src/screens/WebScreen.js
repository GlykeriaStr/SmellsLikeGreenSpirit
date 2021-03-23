import React, { useState } from 'react';
import * as Progress from 'react-native-progress';
import { WebView } from 'react-native-webview';

export default MyWeb = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);

  return (
    <>
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
          uri: 'https://www.clevel.co.uk/offset-a-desired-amount-of-co2/',
        }}
        style={{ marginTop: 20 }}
        onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
        onLoadEnd={() => setLoaded(true)}
      />
    </>
  );
};
