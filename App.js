import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Header from './src/components/Header'
import MyInformation from './src/components/MyInformation'
import MyImages from './src/components/MyImages'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MyInformation />
      <MyImages />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
