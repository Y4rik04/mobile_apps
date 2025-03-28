import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, Alert, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function UserInputScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAirplaneMode, setIsAirplaneMode] = useState(false);
  const [isWifi, setIsWifi] = useState(true);
  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {
    Alert.alert('Submitted Data', `Username: ${username}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      {/* Введення імені користувача */}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      {/* Введення паролю */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button title="Submit" onPress={handleSubmit} />

      {/* Перемикачі */}
      <View style={styles.switchContainer}>
        <Text>Airplane Mode</Text>
        <Switch
          value={isAirplaneMode}
          onValueChange={(value) => {
            setIsAirplaneMode(value);
            if (value) setIsWifi(false);
          }}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text>Wi-Fi</Text>
        <Switch
          value={isWifi}
          onValueChange={(value) => {
            setIsWifi(value);
            if (value) setIsAirplaneMode(false);
          }}
        />
      </View>

      {/* Вибір дати */}
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => selectedDate && setDate(selectedDate)}
      />
      <Text>Selected Date: {date.toDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  }
});
