// FetchDataModal.tsx
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const FetchDataModal = ({ visible, onClose }: any) => {
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        onClose();
      }, 3000); // Hide after 3 seconds
    }
  }, [visible]);

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text>Fetching data...</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default FetchDataModal;
