import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/globalStyles';

const Searchbar = () => (
    <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#aaa" />
        <TextInput placeholder="Search for your favorite" style={styles.searchInput} />
        <Ionicons name="options-outline" size={20} color="#aaa" />
    </View>
);

export default Searchbar;
