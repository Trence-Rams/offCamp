import { Bubble } from "react-native-gifted-chat";

const RenderBubble = (props) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#F4A750",
        },
        left: {
          backgroundColor: "#fff",
        },
      }}
    />
  );
};
export default RenderBubble;
