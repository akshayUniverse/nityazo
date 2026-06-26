import { StyleSheet } from "react-native";

import { Colors } from "../constants/colors";
import { Spacing } from "../constants/spacing";

export const ProductScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    padding: Spacing.lg,
    paddingBottom: 120,
  },

  image: {
    width: "100%",
    height: 190,
    borderRadius: 10,
    resizeMode: "cover",
  },

  title: {
    marginTop: 18,
    fontSize: 28,
    fontWeight: "700",
    color: Colors.text,
  },

  weight: {
    marginTop: 6,
    color: Colors.border,
    fontSize: 16,
  },

  price: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: "700",
    color: Colors.text,
  },

  heading: {
    marginTop: 22,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
  },

  description: {
    fontSize: 15,
    color: "#666",
    lineHeight: 24,
  },

  readMore: {
    marginTop: 6,
    color: Colors.primary,
    fontWeight: "600",
  },
});
