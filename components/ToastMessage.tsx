import React from 'react';
import { Button } from 'react-native';
import Toast from 'react-native-toast-message';

const ToastMessage = () => {
  const showToast = () => {
    Toast.show({
      type: 'success', // Ви можете змінити тип на 'error', 'info' і т.д.
      position: 'bottom',
      text1: 'Something happened!',
      text2: 'This is a toast message',
      visibilityTime: 3000, // Тост зникає через 3 секунди
    });
  };

  return (
    <>
      <Button title="Toast Message" onPress={showToast} />
      {/* Переконайтесь, що Toast має правильний референс */}
      <Toast ref={Toast.setRef} />
    </>
  );
};

export default ToastMessage;
