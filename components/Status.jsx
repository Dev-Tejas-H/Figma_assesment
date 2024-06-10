import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image , TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const upArrow = require("../assets/uparrow.png");

const GroupBuyStatus = () => {
  const statuses = [
    { status: 'Group Buy Order Placed', time: '04:30 PM, 01 Jan 2023' },
    { status: 'Group Filled', time: '04:30 PM, 02 Jan 2023' },
    { status: 'Order Sent to Seller for Confirmation', time: '02 Jan 2023' },
    { status: 'Order Confirmed by Seller', time: '04:30 PM, 02 Jan 2023' },
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
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    
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
    marginBottom: 16,
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
