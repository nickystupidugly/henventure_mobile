import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Dashboard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6ff',
    padding: 20,
  },
});