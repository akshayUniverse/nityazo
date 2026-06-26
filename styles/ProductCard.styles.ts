import { StyleSheet } from "react-native";

import { Colors } from "../constants/colors";
import { Spacing } from "../constants/spacing";
import { Typography } from "../constants/typography";

export const ProductCardStyles = StyleSheet.create({
  container: {
    width: "48%",
    backgroundColor: Colors.white,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.border,
  },

  image: {
    width: "100%",
    height: 100,
  },

  content: {
    padding: Spacing.sm,
  },

  title: {
    ...Typography.bodyBold,
    color: Colors.text,
  },

  weight: {
    ...Typography.caption,
    color: Colors.secondaryText,
    marginTop: 2,
  },

  bottomRow: {
    marginTop: Spacing.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    ...Typography.bodyBold,
    color: Colors.text,
  },

  button: {
    backgroundColor: "#FF8A5C",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  buttonText: {
    color: Colors.white,
    fontWeight: "600",
    fontSize: 13,
  },
});
