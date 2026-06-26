import { StyleSheet } from "react-native";

import { Colors } from "../constants/colors";
import { Spacing } from "../constants/spacing";
import { Typography } from "../constants/typography";

export const HeaderStyles = StyleSheet.create({
  container: {
    height: 72,
    backgroundColor: Colors.headerBackground,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: Spacing.xxl,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  backButton: {
    width: 40,
    height: 40,

    justifyContent: "center",
    alignItems: "center",
  },

  placeholder: {
    width: 40,
  },

  center: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    ...Typography.h3,
    color: Colors.text,
  },

  subtitle: {
    marginTop: 2,

    ...Typography.caption,

    color: Colors.secondaryText,
  },
});
