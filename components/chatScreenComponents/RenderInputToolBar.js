import { InputToolbar } from "react-native-gifted-chat";

const RenderInputToolbar = (props) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        alignSelf: "center",
        borderRadius: 50,
        backgroundColor: "#F5F5F5",
        marginHorizontal: 15,
        borderTopWidth: 0,
      }}
    />
  );
};
export default RenderInputToolbar;
