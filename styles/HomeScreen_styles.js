import { StyleSheet } from "react-native";


const HomeScreen_styles = StyleSheet.create({
    container: {
      flex: 1,   
      backgroundColor:"#F5F5F5",
      
    },
    item: {
      flex: 1,
      backgroundColor: '#fff',
      margin: 10,
      borderRadius: 10,
      overflow: 'hidden', 
    },
    image: {
      width: '100%',
      height: 150,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    modalImage: {
      width: '80%',
      height: 180,
      marginVertical:10,
      backgroundColor:"orange"
    },

    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 8,
      paddingHorizontal: 10,
      
    },
    price: {
      fontSize: 14,
      color: '#888',
      marginBottom: 8,
      paddingHorizontal: 10,
    },

    ModalProductPrice: {
      fontSize: 14,
      color: '#888',
      marginBottom: 8,
      alignSelf:"flex-start",
    },
    ModalProductName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 8,
      alignSelf:"flex-start",
    },

    ModalProductDescription: {
      fontSize: 14,
      color: '#888',
      marginBottom: 8,
      alignSelf:"flex-start",
    },
    ModalProductDescriptionHeading: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 8,
      alignSelf:"flex-start",
    },

    sellingText: {
      fontSize: 32,
      marginHorizontal: 20,
      marginVertical: 10,
      textAlign: 'left',
      color: '#333',
      fontWeight: 'bold',
    },
    modalContainer: {
      alignItems: 'center',
      width: '90%',
      alignSelf: 'center',
      height: '60%',
      borderRadius:15,
      marginVertical:'50%',
      paddingVertical:10,
      backgroundColor:"#fff",
      elevation:100,
    },
});

export default HomeScreen_styles;