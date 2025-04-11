import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: Hai Nguyen</Text>
      <Text style={styles.text}>Degree: MS in Computer Science</Text>
      <Text style={styles.text}>School: STC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 8,
  },
});