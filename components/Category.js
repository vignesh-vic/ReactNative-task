import { View, Text, Image } from 'react-native';
import styles from '../styles/globalStyles';
const logo = require('../assets/prod-4.jpg')
const Category = () => {

    return (
        <View style={styles.card}>

            <Image
                source={logo}
                style={styles.drinkImage}
            />

        </View>
    )
};

export default Category;
