import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "./CustomButton";

const OnboardingScreen3 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("OnboardingScreen3");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const handleNextPress = () => {
    navigation.navigate("OnboardingScreen3");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
      <StatusBar style="auto" />

      <View>
        {/** section 1 */}
        <View style={{ alignContent: "center" }}>
          {/** Image */}
          <View style={{ alignItems: "center", marginTop: hp(10) }}>
            <Image source={require("./assets/Finances1.png")} />
          </View>
          {/** text  */}
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Buy and sell with
            </Text>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              just a click
            </Text>
            <View
              style={{
                alignContent: "center",
                alignItems: "center",
                marginTop: hp(2),
              }}
            >
              <Text style={{ color: "#EBDADA", fontSize: 20 }}>
                Get started now and join a community
              </Text>
              <Text style={{ color: "#EBDADA", fontSize: 20 }}>
                of savvy buyers and sellers.
              </Text>
              <Text style={{ color: "#EBDADA", fontSize: 20 }}>
                Let’s build the future together
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
                  backgroundColor: index === 2 ? "#58EDE4" : "#EAF6F5",
                  marginHorizontal: 5,
                }}
              />
            ))}
          </View>
          {/** button */}
        </View>
        <CustomButton title="What Next" onPress={handleNextPress} />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen3;
