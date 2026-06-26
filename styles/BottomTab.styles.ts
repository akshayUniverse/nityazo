import { StyleSheet } from "react-native";

import { Colors } from "../constants/colors";

export const BottomTabStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    backgroundColor: Colors.white,

    paddingVertical: 10,

    borderTopWidth: 1,
    borderTopColor: "#ECECEC",
  },

  item: {
    alignItems: "center",
    justifyContent: "center",

    width: 62,
    height: 48,

    borderRadius: 14,
  },

  activeItem: {
    backgroundColor: "#FFD7C8",
  },

  label: {
    marginTop: 4,
    fontSize: 11,
    color: "#666",
  },

  activeLabel: {
    color: Colors.primary,
    fontWeight: "600",
  },
});
