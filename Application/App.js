import React from 'react';
import { View, Text } from 'react-native';
import { GLView } from 'expo-gl';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <WebView source={{ uri: 'http://amgra.ru/univerce_map/university_map-react-app/' }} style={{ marginTop: 40 }} />
  );
}
