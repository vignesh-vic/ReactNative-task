import  { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Tabs from './components/Tabs';
import Promo from './components/Promo';
import BottomNav from './components/BottomNav';
import Popular from './components/Popular';
import BestSeller from './components/BestSeller';
import Category from './components/Category';

export default function App() {
  const [activeTab, setActiveTab] = useState('Promo');

  return (
    <View style={styles.container}>
      <Header />
      <Searchbar />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {activeTab === 'Promo' && <Promo />}
        {activeTab === 'Popular' && <Popular />}
        {activeTab === 'Best seller' && <BestSeller />}
        {activeTab === 'Category' && <Category />}
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
