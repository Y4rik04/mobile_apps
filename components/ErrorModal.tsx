// ErrorModal.tsx
import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const ErrorModal = ({ visible, onClose }: any) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={[styles.modalContainer, { backgroundColor: 'red' }]}>
          <Text style={styles.errorText}>Something went wrong!</Text>
          <Button title="Fix it" onPress={() => onClose('Fix it')} />
          <Button title="Ignore it" onPress={() => onClose('Ignore it')} />
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
    padding: 20,
    borderRadius: 10,
  },
  errorText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ErrorModal;
