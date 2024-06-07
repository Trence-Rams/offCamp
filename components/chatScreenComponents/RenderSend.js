import {Send } from 'react-native-gifted-chat';
import {Avatar } from 'react-native-elements';

const RenderSend = (props) => {

    return (
      <Send {...props} containerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        {/* Customize the appearance of the send button here */}
        {/* You can replace the text below with your own custom send button component */}
        <Avatar
          size={32}
          rounded
          icon={{ name: 'send', color: '#fff', type: 'material' }}
          containerStyle={{ backgroundColor: '#fc8e53' }}
        />
      </Send>
    );
  };
  export default RenderSend