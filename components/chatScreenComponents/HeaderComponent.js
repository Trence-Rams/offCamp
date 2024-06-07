import { Header, Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const HeaderComponent = () => {

    const navigation = useNavigation();
    
  return (
    <Header
    containerStyle={{
        elevation: 2,
        justifyContent: 'space-around',
        backgroundColor: '#fc8e53',
    }}
    leftComponent={{
      icon: 'arrow-back',
      color: '#fff',
      onPress: () => navigation.goBack(),
    }}
    centerComponent={{ text: 'Chat', style: { color: '#fff', fontSize: 25, fontWeight: 'bold' } }}
    rightComponent={
      <Avatar
        onPress={() => navigation.navigate('Profile')}
        rounded
        source={{ uri: 'https://source.unsplash.com/300x300/' }}
      />
    }
  />
  )
}
export default HeaderComponent