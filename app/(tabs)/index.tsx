// app/index.tsx
import React, { useState } from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';
import ConfirmActionModal from '../../components/ConfirmActionModal';
import ErrorModal from '../../components/ErrorModal';
import ToastMessage from '../../components/ToastMessage';
import FetchDataModal from '../../components/FetchDataModal';

const App = () => {
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);
  const [isErrorModalVisible, setErrorModalVisible] = useState(false);
  const [isToastVisible, setToastVisible] = useState(false);
  const [isLoadingModalVisible, setLoadingModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Confirm Action" onPress={() => setConfirmModalVisible(true)} />
      <Button title="Show Error" onPress={() => setErrorModalVisible(true)} />
      <Button title="Toast Message" onPress={() => setToastVisible(true)} />
      <Button title="Fetch Data..." onPress={() => setLoadingModalVisible(true)} />

      <ConfirmActionModal
        visible={isConfirmModalVisible}
        onClose={() => setConfirmModalVisible(false)}
      />
      <ErrorModal
        visible={isErrorModalVisible}
        onClose={() => setErrorModalVisible(false)}
      />
      <ToastMessage
        visible={isToastVisible}
        onClose={() => setToastVisible(false)}
      />
      <FetchDataModal
        visible={isLoadingModalVisible}
        onClose={() => setLoadingModalVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
