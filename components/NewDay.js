import { StatusBar } from 'expo-status-bar';
import { Appbar, List, Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import TaskProgressBar from './TaskProgressBar';


const NewDay = () => {
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    return (
        <View>
            <Text variant="displayLarge">Think of 6 things you want to accomplish tomorrow!</Text>
            <List.Item
                title="First Item"
                description="Item description"
                left={props => <List.Icon {...props} icon="folder" />}
            />

            <TaskProgressBar />
        </View>
    );
}

export default NewDay;