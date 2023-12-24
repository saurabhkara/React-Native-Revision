import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function DayListItem({ item }) {
  console.log(item);
  return (
    <Link href={`/day${item}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{item}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    // width: 100,
    // height: 100,
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#F9EDE3",
    borderColor: "#9b4521",
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    color: "#9b4521",
    fontSize: 20,
    fontFamily: "Inter",
  },
});
