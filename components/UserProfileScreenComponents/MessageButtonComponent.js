import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import { Badge,Icon } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

const MessageButtonComponent = () => {

  const navigation = useNavigation(); 

  return (
    <View style={{display:"flex", justifyContent: "space-around",width:"100%",flexDirection:"row",marginTop:0}}>
    <TouchableOpacity>
        <View style={{alignItems:"center"}}>
            <Badge>6</Badge>
            <Icon
              color="#4d5963"
              source="comment-text-multiple-outline"
              size={35}
            />
            <Text>Messages</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity  style={{alignSelf:"flex-end"}} onPress={() => navigation.navigate('Form')}>
        <View style={{alignItems:"center"}}>
          <Icon
            color="#4d5963"
            source="package"
            size={35}
          />
          <Text>Products</Text>
          </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Home')}  style={{alignSelf:"flex-end"}}>
        <View style={{alignItems:"center"}}>
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