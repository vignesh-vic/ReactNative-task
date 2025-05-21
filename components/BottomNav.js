import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles/globalStyles';

const BottomNav = () => (
    <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
            <Ionicons name="home" size={22} color="#f9a825" />
            <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <Ionicons name="compass-outline" size={22} color="#aaa" />
            <Text style={styles.navText}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="shopping-cart" size={22} color="#aaa" />
            <Text style={styles.navText}>My order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <FontAwesome5 name="bars" size={22} color="#aaa" />
            <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
    </View>
);

export default BottomNav;
