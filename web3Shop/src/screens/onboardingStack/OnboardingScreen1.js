import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import CustomButton from "/src/Components/CustomButton"; // Import your custom button
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const OnboardingScreen1 = () => {
  const navigation = useNavigation(); // Get the navigation object

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("OnboardingScreen2"); // Navigate to the next screen
    }, 3000); // 3000 milliseconds

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, [navigation]);

  const handleNextPress = () => {
    navigation.navigate("OnboardingScreen2"); // Navigate when button is pressed
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <StatusBar style="auto" />
      <View>
        {/** section 1 */}
        <View style={{ alignContent: "center" }}>
          {/** Image */}
          <View style={{ alignItems: "center", marginTop: hp(13) }}>
            <Image source={require("./assets/Finances.png")} />
          </View>
          {/** text  */}
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>
              Shop with Crypto
            </Text>
            <View
              style={{
                alignContent: "center",
                alignItems: "center",
                marginTop: hp(2),
              }}
            >
              <Text style={{ color: "#A6A6A6", fontSize: 20 }}>
                Shop securely, seamlessly, and
              </Text>
              <Text style={{ color: "#A6A6A6", fontSize: 20 }}>
                {" "}
                on-chain. Experience the future of
              </Text>
              <Text style={{ color: "#A6A6A6", fontSize: 20 }}>
                e-commerce with Web3.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: hp(5),
              alignItems: "center",
              alignContent: "center",
              marginLeft: wp(40),
            }}
          >
            {[...Array(3)].map((_, index) => (
              <View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: index === 0 ? "#58EDE4" : "#ADD2CF",
                  marginHorizontal: 5,
                }}
              />
            ))}
          </View>
        </View>
      </View>
      {/* Your onboarding content here */}
      <CustomButton title="What Next" onPress={handleNextPress} />
    </SafeAreaView>
  );
};

export default OnboardingScreen1;
