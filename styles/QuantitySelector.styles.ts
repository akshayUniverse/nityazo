import { StyleSheet } from "react-native";

import { Colors } from "../constants/colors";
import { Spacing } from "../constants/spacing";

export const QuantitySelectorStyles = StyleSheet.create({
  container: {
    marginTop: Spacing.lg,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: Spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.text,
  },

  controls: {
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    width: 20,
    height: 20,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },

  buttonText: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: 12,
  },

  quantity: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "600",
  },
});
