import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deliveryText: {
        color: '#999',
        fontSize: 12,
    },
    locationText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
        gap: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 20,
        borderWidth: 1,             
        borderColor: '#ccc',    
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
    },
    card: {
        height: 350,
        width: width * 0.9,
        backgroundColor: '#003049',
        borderRadius: 20,
        alignSelf: 'center',
        overflow: 'hidden',
    },
    discountBadge: {
        position: 'absolute',
        top: 15,
        left: 15,
        backgroundColor: '#00b4d8',
        borderRadius: 8,
        padding: 5,
        zIndex: 2,
    },
    discountText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
    drinkImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // covers entire area without maintaining aspect ratio
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    },
    drinkTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    drinkSubtitle: {
        color: '#fff',
        fontSize: 14,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 18,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.4,
        shadowRadius: 26,
        borderRadius: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: 'full',
        marginBottom: 5,
        elevation: 18,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: '#aaa',
    },
    navTextActive: {
        fontSize: 12,
        color: '#f9a825',
    },
});
