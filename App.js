import { StatusBar } from 'expo-status-bar';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './components/AppBar';
import NavigationBar from './components/NavigationBar';
import TodoList from './components/TodoList';
import NewDay from './components/NewDay';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const NEW_DAY = true;
const todo_screen = NEW_DAY === true ? <NewDay /> : <TodoList />

export default function App() {
  return (
    <PaperProvider>
      <AppBar />
      {todo_screen}
      <NavigationBar />
    </PaperProvider>
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
