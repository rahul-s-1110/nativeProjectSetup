import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/navigation/rootNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}> 
      <RootNavigation />
      </Provider>
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
