import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import { Spacing } from "../constants/spacing";
import { Typography } from "../constants/typography";

export const HelpCardStyles = StyleSheet.create({
  container: {
    marginTop: Spacing.sm,
    padding: Spacing.xl,
    borderRadius: 25,
    backgroundColor: "#F0F0F0",
    borderWidth: 0.5,
    borderColor: "#C0C0C0",
    alignItems: "center",
  },

  title: {
    ...Typography.h3,
    color: Colors.text,
    marginBottom: Spacing.lg,
  },

  subtitle: {
    ...Typography.caption,
    color: Colors.secondaryText,
    textAlign: "center",
  },
});
