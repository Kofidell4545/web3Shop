import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen1 from "../../src/screens/onboardingStack/OnboardingScreen1";
import OnboardingScreen2 from "./src/screens/onboardingStack/OnboardingScreen2";
import OnboardingScreen3 from "./src/screens/onboardingStack/OnboardingScreen3";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingScreen1">
        <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
        <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
        <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
