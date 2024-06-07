import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import UserProfileScreen_Styles from '../../styles/UserProfileScreen_Styles'
import { Icon } from 'react-native-paper'

const SettingsComponent = () => {
  return (
    <View>
          <Text style={UserProfileScreen_Styles.settingsText}> Settings</Text>

           <TouchableOpacity>
                <View style={{flexDirection:"row",gap:10,marginRight:"50%",paddingVertical:10}}>
                    <Icon color="#4d5963" source="trash-can-outline" size={20}/>
                    <Text>Delete your account</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{flexDirection:"row",gap:10,marginRight:"50%",paddingVertical:10}}>
                    <Icon color="#4d5963" source="email-edit-outline" size={20}/>
                    <Text>Edit your email</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{flexDirection:"row",gap:10,marginRight:"50%",paddingVertical:10}}>
                    <Icon color="#4d5963" source="account-key-outline" size={20}/>
                    <Text>Change your password</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{flexDirection:"row",gap:10,marginRight:"50%",paddingVertical:10}}>
                    <Icon color="#4d5963" source="pencil" size={20}/>
                    <Text>Edit your username</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{flexDirection:"row",gap:10,marginRight:"50%",paddingVertical:10}}>
                    <Icon color="#4d5963" source="phone" size={20}/>
                    <Text>Change your contact</Text>
                </View>
            </TouchableOpacity>
    </View>
  )
}
export default SettingsComponent