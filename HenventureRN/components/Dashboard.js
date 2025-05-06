import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Dashboard() {
  const [eggCount, setEggCount] = useState(12);
  const [feed, setFeed] = useState(20);
  const [day, setDay] = useState(1);
  const weather = "Sunny";
  const crowStatus = "Active";

  const nextDay = () => {
    setDay(day + 1);
    setEggCount(eggCount + 5);
    setFeed(feed - 2);
  };

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Henventure Dashboard</Text>
      <Text style={styles.stat}>Eggs: {eggCount}</Text>
      <Text style={styles.stat}>Feed: {feed} lbs</Text>
      <Text style={styles.stat}>Weather: {weather}</Text>
      <Text style={styles.stat}>Crow Patrol: {crowStatus}</Text>
      <Text style={styles.stat}>Day {day}</Text>
      <Button title="Next Day" onPress={nextDay} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stat: {
    fontSize: 18,
    marginVertical: 5,
  },
});