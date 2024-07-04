import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native";

const ProductFormScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        <View>
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: 25,
              marginBottom: 60,
              marginTop: 60,
            }}
          >
            Product info
          </Text>
          <View>
            <TextInput
              style={{ backgroundColor: "#fff" }}
              label="Product name"
            />
            <TextInput style={{ backgroundColor: "#fff" }} label="Price" />
            <TextInput
              style={{ backgroundColor: "#fff" }}
              label="Description"
              multiline
            />
            <TextInput style={{ backgroundColor: "#fff" }} label="Location" />
            <TextInput style={{ backgroundColor: "#fff" }} label="Image" />
          </View>
          <View>
            <Button
              title="Add product"
              buttonStyle={{
                alignSelf: "center",
                backgroundColor: "#fc8e53",
                width: 300,
                borderRadius: 20,
                marginTop: 50,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductFormScreen;
