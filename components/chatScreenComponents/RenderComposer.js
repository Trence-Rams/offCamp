import {Composer} from 'react-native-gifted-chat';

const RenderComposer = (props) => {
    return (
      <Composer
        {...props}
        textInputStyle={{
          borderRadius: 20, // Customize the border radius of the text input
          paddingHorizontal: 10, // Add padding to the text input
        }}
      />
    );
  };
  export default RenderComposer