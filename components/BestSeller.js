import { View, Text, Image } from 'react-native';
import styles from '../styles/globalStyles';
const logo = require('../assets/prod-3.jpg')
const BestSeller = () => {

    return (
        <View style={styles.card}>

            <Image
                source={logo}
                style={styles.drinkImage}
            />

        </View>
    )
};

export default BestSeller;
