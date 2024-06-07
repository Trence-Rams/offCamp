import { SafeAreaView } from 'react-native-safe-area-context'
import UserProfileScreen_Styles from '../styles/UserProfileScreen_Styles'
import React, { useState} from 'react';
import {FlatList, TouchableOpacity, Image, Text, Modal, View, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen_styles from '../styles/HomeScreen_styles';
import { Icon } from 'react-native-paper';
import { Button } from 'react-native-elements';

const products = [
  { id: '1', name: 'Product 1', price: 'R119.99', details: 'Details of Product 1' },
  { id: '2', name: 'Product 2', price: 'R229.99', details: 'Details of Product 2' },
  { id: '3', name: 'Product 3', price: 'R339.99', details: 'Details of Product 3' },
  { id: '4', name: 'Product 4', price: 'R449.99', details: 'Details of Product 4' },
  { id: '5', name: 'Product 5', price: 'R559.99', details: 'Details of Product 5' },
  { id: '6', name: 'Product 6', price: 'R669.99', details: 'Details of Product 6' },
  { id: '7', name: 'Product 3', price: 'R339.99', details: 'Details of Product 3' },
  { id: '8', name: 'Product 4', price: 'R449.99', details: 'Details of Product 4' },
  { id: '9', name: 'Product 5', price: 'R559.99', details: 'Details of Product 5' },
  { id: '10', name: 'Product 6', price: 'R669.99', details: 'Details of Product 6' },
];

const SellerProfileScreen = () => {

    const navigation = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductPress = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={HomeScreen_styles.item} onPress={() => handleProductPress(item)}>
      <Image source={{ uri: `https://source.unsplash.com/300x300/?${item.name}` }} style={HomeScreen_styles.image} />
      <Text style={HomeScreen_styles.name}>{item.name}</Text>
      <Text style={HomeScreen_styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style = {{backgroundColor:"#fff"}}>
      <ScrollView >
        <View>
     <View>
        <View style = {{alignSelf:"center",paddingTop:50}}>
            <Icon
              source="account-circle"
              size={150}
              color='#fc8e53'
            />
       </View>
        <View style={{alignItems:"center",paddingTop:10}}>
          <Text style={{fontSize:20,fontWeight:500,color:"#4d5963"}}>Terrence</Text>
          <Text style={{fontSize:20,fontWeight:500,color:"#4d5963"}}>0636648338</Text>
        </View>
    </View >
    <Text style={UserProfileScreen_Styles.settingsText}> Products Selling</Text>
    
    <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
</View>
       </ScrollView>
       <Modal
          visible={!!selectedProduct}
          animationType='fade'
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={HomeScreen_styles.modalContainer}>
            <TouchableOpacity onPress={closeModal} style={{alignSelf: 'flex-end',padding:5}}>
            <Icon
                source="close"
                color="grey"
                size={25}
            />
            </TouchableOpacity>
            <ScrollView>
              <View  style={{paddingLeft:10}}>
              <Image source={{ uri: `https://source.unsplash.com/300x300/` }} style={HomeScreen_styles.modalImage} />
              <View style={{flexDirection:"row" ,display:"flex",justifyContent:"space-between",width:"80%"}}>
                  <View>
                      <Text style={HomeScreen_styles.ModalProductName}>Product 1</Text>
                      <Text style={HomeScreen_styles.ModalProductPrice}>R119.99</Text>
                </View>
                <View>
                    <Text style={HomeScreen_styles.ModalProductName}>Location</Text>
                    <Text style={HomeScreen_styles.ModalProductPrice}>Mafikeng</Text>
                </View>
            </View>
            <View style={{width:'80%'}}>
                <Text style={HomeScreen_styles.ModalProductDescriptionHeading}>Description:</Text>
                <Text style={HomeScreen_styles.ModalProductDescription}>The description here hgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjghjyjghjghjgjghjghjghjghjghjhjghjghjghjghjghjghjghghjhgjghjghjghjghjghjghjghjghjghjghj</Text>
            </View>
          </View>
        </ScrollView>
        <Button
          onPress={() => { closeModal();navigation.navigate('Chat')}}
          title="Request"
          buttonStyle={{ backgroundColor: '#fc8e53', width: 200, borderRadius: 20,marginTop:20 }}
      />
       </View>
      </Modal>
  </SafeAreaView>
  )
}

export default SellerProfileScreen