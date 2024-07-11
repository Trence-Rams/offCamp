import Share from "react-native-share";

const WhatsAppChat = async () => {
  const imageUrl = "assetslaptop.jpeg"; // Replace with the actual path or URL of your image
  const message = "Hello, I request the laptop.";

  const shareOptions = {
    title: "Product Request",
    message: message,
    url: imageUrl, // Use the correct file path or URI scheme
    social: Share.Social.WHATSAPP,
  };

  try {
    await Share.shareSingle(shareOptions);
  } catch (error) {
    console.error("Error sharing image", error);
  }
};

export default WhatsAppChat;
