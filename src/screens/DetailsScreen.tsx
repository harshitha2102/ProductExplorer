import React from 'react';
import { View, Text, Image } from 'react-native';

const DetailsScreen = ({ route }: any) => {
  const { item } = route.params;

  return (
    <View style={{ padding: 20 }}>
      
      <Image
        source={{ uri: item.image }}
        style={{ height: 200, resizeMode: 'contain' }}
      />

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
        {item.title}
      </Text>

      <Text style={{ marginTop: 10 }}>
        {item.description}
      </Text>

      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
        Price: ${item.price}
      </Text>
    </View>
  );
};

export default DetailsScreen;