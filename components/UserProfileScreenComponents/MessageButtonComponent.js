import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import { Badge,Icon } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

const MessageButtonComponent = () => {

  const navigation = useNavigation(); 

  return (
    <View style={{display:"flex", justifyContent: "space-around",width:"100%",flexDirection:"row"}}>
    <TouchableOpacity>
    <Badge>6</Badge>
        <View style={{alignItems:"center",backgroundColor:'#fff', borderRadius:10,padding:8,elevation:10,width:100,height:70,marginTop:5}}>
       
            <Icon
              color="#4d5963"
              source="comment-text-multiple-outline"
              size={35}
            />
            <Text>Messages</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity  style={{alignSelf:"flex-end"}} onPress={() => navigation.navigate('Products')}>
        <View style={{alignItems:"center",backgroundColor:'#fff', borderRadius:10,padding:8,elevation:10,width:100,height:70}}>
          <Icon
            color="#4d5963"
            source="package"
            size={35}
          />
          <Text>Products</Text>
          </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Home')}  style={{alignSelf:"flex-end"}}>
        <View style={{alignItems:"center",backgroundColor:'#fff', borderRadius:10, padding:8,elevation:10,width:100,height:70}}>
          <Icon 
            color="#4d5963"
            source="logout"
            size={35}
          />
          <Text>Logout</Text>
          </View>
    </TouchableOpacity>
    </View>
  )
}
export default MessageButtonComponent