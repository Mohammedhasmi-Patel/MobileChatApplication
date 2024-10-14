import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "http://192.168.234.213:3001" }}
        style={{ flex: 1 }}
        javaScriptEnabled={true} // Ensure JavaScript is enabled for cookies to work
        domStorageEnabled={true} // Enable DOM storage for web features
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
});
