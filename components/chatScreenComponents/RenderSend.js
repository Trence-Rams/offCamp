import {Send } from 'react-native-gifted-chat';
import {Avatar } from 'react-native-elements';

const RenderSend = (props) => {

    return (
      <Send {...props} containerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        <Avatar
          size={45}
          rounded
          icon={{ name: 'send', color: '#fff', type: 'material' }}
          containerStyle={{ backgroundColor: '#F4A750',  marginBottom:10}}
        />
      </Send>
    );
  };
  export default RenderSend