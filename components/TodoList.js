import { StatusBar } from 'expo-status-bar';
import { Appbar, List, Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import TaskProgressBar from './TaskProgressBar';


const TodoList = () => {
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    return (
        <View>
            <List.Item
                title="First Item"
                description="Item description"
                left={props => <List.Icon {...props} icon="folder" />}
            />

            <TaskProgressBar />
        </View>
    );
}

export default TodoList;