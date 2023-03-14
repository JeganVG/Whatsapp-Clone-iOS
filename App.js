import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/Components/ChatListItem';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello world</Text> */}
      <ChatListItem/>
      <ChatListItem/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
