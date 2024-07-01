import React from 'react'
import { View, Text } from 'react-native'
import { Icon} from 'react-native-paper';


const UserImageComponent = () => {
  return (
    <View style={{marginVertical:8,width:250,alignItems:'center',backgroundColor:'#fff',borderRadius:10,elevation:10,padding:20}}>
        <View>
            <Icon
              source="account-circle"
              size={150}
              color='#fc8e53'
            />
       </View>
        <View style={{alignItems:"center",paddingTop:10}}>
          <Text style={{fontSize:40,fontWeight:100}}>Welcome</Text>
          <Text style={{fontSize:20,fontWeight:500,color:"#4d5963"}}>Terrence</Text>
         </View>
    </View >
  )
}
export default UserImageComponent