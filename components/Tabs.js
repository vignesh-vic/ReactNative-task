import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tabStyles from '../styles/tabStyles';

const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = ['Popular', 'Best seller', 'Promo', 'Category'];

    return (
        <View style={tabStyles.tabs}>
            {tabs.map((tab, index) => (
                <TouchableOpacity key={index} onPress={() => setActiveTab(tab)}>
                    <Text style={[tabStyles.tabText, activeTab === tab && tabStyles.activeTab]}>
                        {tab}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Tabs;
