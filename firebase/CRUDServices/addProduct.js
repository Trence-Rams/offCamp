import { db, storage } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Alert } from "react-native";
import { auth } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const addProduct = async (
  productName,
  price,
  whatsappNumber,
  comments,
  location,
  locationName,
  imageFileUri
) => {
  const user = auth.currentUser;
  if (!user) {
    Alert.alert("Error", "No user is signed in.");
    return;
  }

  try {
    // Upload image to Firebase Storage
    const storageRef = ref(
      storage,
      `productImages/${Date.now()}_${imageFileUri}`
    );
    await uploadBytes(storageRef, imageFileUri);
    const imageURL = await getDownloadURL(storageRef);

    // Add product details to Firestore
    const productData = {
      productName: productName,
      price: price,
      whatsappNumber: whatsappNumber,
      comments: comments,
      location: location,
      locationName,
      imageURL: imageURL,
      userId: user.uid,
    };

    const productsCollectionRef = collection(db, "products");
    await addDoc(productsCollectionRef, productData);

    Alert.alert("Product added successfully!");
    console.log("Product added successfully!");
  } catch (error) {
    console.error("Error saving product details to Firestore:", error);
    Alert.alert("Error", "Failed to save product details. Please try again.");
  }
};
