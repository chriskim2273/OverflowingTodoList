import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const NavigationBar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'todolist', title: 'Todo List', focusedIcon: 'list-status', unfocusedIcon: 'list-status' },
        { key: 'timeline', title: 'Timeline', focusedIcon: 'timeline-check-outline' },
        { key: 'avatar', title: 'Avatar', focusedIcon: 'account-cowboy-hat' },
        { key: 'account', title: 'Account', focusedIcon: 'account-box-outline', unfocusedIcon: 'account-box-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        todolist: MusicRoute,
        timeline: AlbumsRoute,
        avatar: RecentsRoute,
        account: NotificationsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default NavigationBar;
