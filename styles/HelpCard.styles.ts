import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import { Spacing } from "../constants/spacing";
import { Typography } from "../constants/typography";

export const HelpCardStyles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.sm,
    padding: Spacing.lg,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
  },

  title: {
    ...Typography.h3,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },

  subtitle: {
    ...Typography.caption,
    color: Colors.secondaryText,
    textAlign: "center",
  },
});
