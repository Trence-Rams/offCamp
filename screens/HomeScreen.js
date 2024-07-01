import React, { useState, useRef } from 'react';
import {TouchableOpacity, Image, Text, View, ScrollView, Animated, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import HomeScreen_styles from '../styles/HomeScreen_styles';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Button} from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import products from '../products';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleProductPress = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const ProductItem = React.memo(({ item }) => (
    <TouchableOpacity style={HomeScreen_styles.item} onPress={() => handleProductPress(item)}>
      <Image source={{ uri: ` 'https://source.unsplash.com/300x300/?nature'${item.name}` }} style={HomeScreen_styles.image} />
      <Text style={HomeScreen_styles.name}>{item.name}</Text>
      <Text style={HomeScreen_styles.price}>{item.price}</Text>
    </TouchableOpacity>
  ));

  const renderItem = ({ item }) => <ProductItem item={item} />;



  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [0, -190],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={HomeScreen_styles.container}>
      
      <Animated.View style={{ 
        transform: [{ translateY: headerTranslateY }],
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        paddingTop: 10
        
      }}>
        <Button
          onPress={() => navigation.navigate('Sign in')}
          title="Sign in"
          buttonStyle={{ width: 100, borderRadius: 20, alignSelf: 'flex-end', marginRight: 20, backgroundColor: '#fc8e53' }}
        />
        <Text style={HomeScreen_styles.sellingText}>Discover{'\n'}amazing used{'\n'}products.</Text>
        <Searchbar
          placeholder="Search product..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{ width: 350, alignSelf: 'center', marginVertical:30}}
          />
      </Animated.View>

      <Animated.FlatList
        contentContainerStyle={{ paddingTop:300,alignSelf:'center'}}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />

      <Modal
        visible={!!selectedProduct}
        animationType='fade'
        transparent={true}
        onRequestClose={closeModal}
        onBackdropPress={closeModal}
        
      >
        <View style={HomeScreen_styles.modalContainer}>
          <TouchableOpacity onPress={closeModal} style={{ alignSelf: 'flex-end', padding: 5}}>
            <MaterialCommunityIcons name="close" color="grey" size={25} />
          </TouchableOpacity>
          <ScrollView style={{width:'95%',alignSelf:'center'}}>
            <View style={{alignItems:'center',width:'100%'}}>
              <Image source={{ uri: `https://source.unsplash.com/300x300/` }} style={HomeScreen_styles.modalImage} />
              <View style={{ flexDirection: "row",justifyContent:'space-between', width:'100%' }}>
                <View>
                  <Text style={HomeScreen_styles.ModalProductName}>{selectedProduct?.name}</Text>
                  <Text style={HomeScreen_styles.ModalProductPrice}>{selectedProduct?.price}</Text>
                </View>
                <View >
                  <Text style={HomeScreen_styles.ModalProductName}>Location</Text>
                  <Text style={HomeScreen_styles.ModalProductPrice}>Mafikeng</Text>
                </View>
              </View>
              <View style={{ width: '100%'}}>
                <Text style={HomeScreen_styles.ModalProductDescriptionHeading}>Description:</Text>
                <Text style={HomeScreen_styles.ModalProductDescription}>{selectedProduct?.details}</Text>
              </View>
            </View>
          </ScrollView>
          <Button
            onPress={() => { closeModal(); navigation.navigate('Chat') }}
            title="Request"
            buttonStyle={{ backgroundColor: '#fc8e53', width: 200, borderRadius: 20, marginTop: 20 }}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;