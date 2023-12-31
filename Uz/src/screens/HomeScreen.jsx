import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/theme';
import CommunityCard from '../components/CommunityCard';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
  const tempData = [
    { id: '1', title: 'Community 1' },
    { id: '2', title: 'Community 2' },
    { id: '3', title: 'Community 3' },
    { id: '4', title: 'Community 4' },
    { id: '5', title: 'Community 5' },
    { id: '6', title: 'Community 6' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <CommunityCard title={item.title} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.screenContainer}>
      <Header />
      <FlatList
        data={tempData}
        contentContainerStyle={{
          padding: 20,
        }}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  listContainer: {
    flex: 1,
  },
});
