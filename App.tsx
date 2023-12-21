import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DayListItem from "./src/components/core/DayListItem";
const days = [...Array(24)].map((item, index) => index + 1);
export default function App() {
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
    backgroundColor: "blue",
  },
  column: {
    gap: 10,
  },
});
