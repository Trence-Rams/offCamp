import { Composer } from "react-native-gifted-chat";

const RenderComposer = (props) => {
  return (
    <Composer
      {...props}
      textInputStyle={{
        borderRadius: 15, // Customize the border radius of the text input
        padding: 15,
        width: "auto",
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        marginRight: 10,
        elevation: 10,
        marginBottom: 5,
      }}
    />
  );
};
export default RenderComposer;
