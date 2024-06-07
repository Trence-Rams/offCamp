import {Bubble} from 'react-native-gifted-chat';

const RenderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#fc8e53',
          },
          left: {
            backgroundColor: '#fdb893',
          },
        }}
      />
    );
  };
  export default RenderBubble