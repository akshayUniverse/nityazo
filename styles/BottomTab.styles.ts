import { StyleSheet } from "react-native";

export const BottomTabStyles = StyleSheet.create({
  container: {
    position: "absolute",

    left: 0,

    right: 0,

    bottom: 0,

    height: 96,

    flexDirection: "row",

    paddingTop: 8,

    borderTopWidth: 2,

    borderTopColor: "#EBEBEB",

    borderBottomLeftRadius: 20,

    borderBottomRightRadius: 20,

    shadowColor: "#333",

    shadowOffset: {
      width: 0,
      height: -5,
    },

    shadowOpacity: 0.1,

    shadowRadius: 20,

    elevation: 15,
  },

  item: {
    flex: 1,

    height: 88,

    justifyContent: "center",

    alignItems: "center",
  },

  activeItem: {
    backgroundColor: "#FFD7C9",

    borderTopWidth: 8,

    borderTopColor: "#FF7F50",

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,
  },

  label: {
    marginTop: 6,

    fontSize: 12,

    color: "#666",
  },

  activeLabel: {
    color: "#222",

    fontWeight: "600",
  },
});
