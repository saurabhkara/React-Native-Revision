import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
function RootLayout() {
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
  });

  useEffect(() => {
    SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "DEVember" }} />
    </Stack>
  );
}

export default RootLayout;
