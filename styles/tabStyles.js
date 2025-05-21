import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25,
        marginBottom: 10,
    },
    tabText: {
        fontSize: 14,
        color: '#999',
    },
    activeTab: {
        color: '#e91e63',
        fontWeight: 'bold',
        borderBottomColor: '#e91e63',
        borderBottomWidth: 2,
        paddingBottom: 5,
    },
});
