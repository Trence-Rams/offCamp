import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Input,Button } from 'react-native-elements'
import { ScrollView } from 'react-native'

const ProductFormScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#fff",flex:1}}>
        <ScrollView>
            <View>
                <Text style = {{alignSelf:"center",fontWeight: 'bold', fontSize: 25, marginBottom: 60, marginTop: 60 }}>Product info</Text>
                <View>
                    <Input placeholder='Product name'/>
                    <Input placeholder='Price'/>
                    <Input placeholder='Description'/>
                    <Input placeholder='Location'/>
                    <Input placeholder='Image'/>
                </View>
                <View>
                    <Button
                        title="Add Product"
                        buttonStyle={{ alignSelf:"center",backgroundColor: '#fc8e53', width: 300, borderRadius: 20,marginVertical:20 }}
                        />
                </View>
            </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default ProductFormScreen