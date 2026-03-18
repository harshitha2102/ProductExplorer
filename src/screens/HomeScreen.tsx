import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../services/api';
import { setProducts } from '../redux/productSlice';

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.list);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const data = await fetchProducts();
    dispatch(setProducts(data));
    setLoading(false);
  };

  const filteredData = products.filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, padding: 14, backgroundColor: '#f5f5f5' }}>

      {/*Status Bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/*Search Bar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingHorizontal: 12,
          borderRadius: 14,
          marginBottom: 14,
          elevation: 3,
        }}
      >
      
        <Text style={{ fontSize: 18, marginRight: 10, color: '#888' }}>
          🔍
        </Text>

        <TextInput
          placeholder="Search products..."
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#999"
          style={{ flex: 1, padding: 10 }}
        />
      </View>

      {/*Loading */}
      {loading && (
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>
          Loading...
        </Text>
      )}

      {/*Empty State */}
      {filteredData.length === 0 && !loading && (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          No products found
        </Text>
      )}

      {/*Product List */}
      <FlatList
        data={filteredData}
        keyExtractor={(item: any) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', { item })}
          >
            <View
              style={{
                padding: 16,
                marginBottom: 14,
                borderRadius: 16,
                backgroundColor: '#fff',
                elevation: 4,
              }}
            >
              <Text
                numberOfLines={2}
                style={{ fontSize: 16, fontWeight: '600' }}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        onEndReached={loadData}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default HomeScreen;