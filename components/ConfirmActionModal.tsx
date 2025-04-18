// ConfirmActionModal.tsx
import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const ConfirmActionModal = ({ visible, onClose }: any) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text>Do you confirm this action?</Text>
          <Button title="Yes" onPress={() => onClose(true)} />
          <Button title="No" onPress={() => onClose(false)} />
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

export default ConfirmActionModal;
