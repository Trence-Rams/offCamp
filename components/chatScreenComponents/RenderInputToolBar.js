import {InputToolbar} from 'react-native-gifted-chat';

const RenderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: '#eee', // Customize the background color of the input toolbar
          borderTopWidth: 1,
          borderTopColor: '#ccc', // Customize the border color of the input toolbar
        }}
      />
    );
  };
  export default RenderInputToolbar