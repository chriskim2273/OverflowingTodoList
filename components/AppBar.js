import { StatusBar } from 'expo-status-bar';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';


const AppBar = () => {
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    return (
        <Appbar.Header elevated={true}>
            <Appbar.BackAction onPress={() => { }} />
            <Appbar.Content title="MustDo" subtitle={'Subtitle'} />
            <Appbar.Action icon="magnify" onPress={() => { }} />
            <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
        </Appbar.Header>
    );
}

export default AppBar;