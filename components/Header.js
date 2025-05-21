import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => (
 <View>

        <View style={styles.header}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons name="location-on" size={24} color="red" />
                <View style={{ marginLeft: 5 }}>
                    <Text style={styles.deliveryText}>Deliver to</Text>
                    <Text style={styles.locationText}>Hanoi, VietNam</Text>
                </View>
            </View>

            <View style={styles.headerIcons}>
                <Ionicons name="calendar-outline" size={24} style={styles.icon} />
                <Ionicons name="notifications-outline" size={24} />
            </View>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 24,padding:10 }}>Mino food</Text>
        </View>
);

export default Header;
