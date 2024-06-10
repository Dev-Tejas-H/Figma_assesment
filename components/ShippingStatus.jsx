import React from 'react';
import { View, Text, StyleSheet, ScrollView , Image ,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const upArrow = require("../assets/uparrow.png");

const GroupBuyStatus = () => {
  const statuses = [
    { status: 'Shipped', time: '06 Jan 2023' },
    { status: 'Out For Delivery', time: 'Delivery By 12 Jan 2023, 08:30 PM' },
    { status: 'Delivered', time: 'Delivered on 12 Jan 2023, 10:35 AM' },
    
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.groupHeader}>
        <View>
          <Text style={styles.header}>Group Buy Status</Text>
          <Text style={styles.time}>04:30 PM, 01 Jan 2023</Text>
        </View>
        <View>
          <TouchableOpacity><Image source={upArrow} style={{width: 50, height: 40}}/></TouchableOpacity>
        </View>
      </View>
      <View style={styles.statusContainer}>
        {statuses.map((item, index) => (
          <View key={index} style={styles.statusItem}>
            <MaterialIcons name="check-circle" size={24} color="green" />
            <View style={styles.statusTextContainer}>
              <Text style={styles.status}>{item.status}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  statusContainer: {
    backgroundColor: '#F2F3F3',
    padding: 5,
    marginTop: 10,
    borderRadius: 10,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusTextContainer: {
    marginLeft: 8,
  },
  status: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default GroupBuyStatus;
