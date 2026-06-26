import { StyleSheet } from "react-native";

import { Colors } from "../constants/colors";
import { Spacing } from "../constants/spacing";
import { Typography } from "../constants/typography";

export const HeaderStyles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },

  title: {
    ...Typography.h1,
    color: Colors.text,
  },

  subtitle: {
    ...Typography.body,
    color: Colors.secondaryText,
    marginTop: 4,
  },

  backButton: {
    width: 40,
    height: 40,

    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: Colors.white,
  },

  centerTitle: {
    position: "absolute",

    left: 0,
    right: 0,
    top: 26,

    textAlign: "center",

    ...Typography.h3,

    color: Colors.text,
  },

  placeholder: {
    width: 40,
    height: 40,
  },
});
