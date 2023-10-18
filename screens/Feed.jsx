import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FeedScreen = () => {
  // Dummy feed data
  const feedData = [
    { id: '1', text: 'This is a feed item.' },
    { id: '2', text: 'Another feed item for testing.' },
    { id: '3', text: 'Yet another feed item.' },
    // Add more feed items as needed
  ];

  // Render each feed item
  const renderFeedItem = ({ item }) => (
    <View style={styles.feedItem}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <FlatList
        data={feedData}
        keyExtractor={(item) => item.id}
        renderItem={renderFeedItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  feedItem: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default FeedScreen;
