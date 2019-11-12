import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: 'http://seopic.699pic.com/photo/50055/5642.jpg_wh1200.jpg' }} />
      <Text>First modification</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
