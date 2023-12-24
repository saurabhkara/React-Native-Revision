import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DayListItem from "../components/core/DayListItem";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
const days = [...Array(24)].map((item, index) => index + 1);

SplashScreen.preventAutoHideAsync();
export default function HomeScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
  });

  useEffect(() => {
    SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        numColumns={2}
        columnWrapperStyle={styles.column}
        keyExtractor={(data) => data.toString()}
        renderItem={({ item }) => <DayListItem item={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  content: {
    gap: 10,
    // backgroundColor: "blue",
  },
  column: {
    gap: 10,
  },
});
