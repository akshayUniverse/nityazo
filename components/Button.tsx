import { Pressable, Text } from "react-native";
import { Colors } from "../constants/colors";
import { Typography } from "../constants/typography";

export default function Button({ title }: { title: string }) {
  return (
    <Pressable
      style={{
        marginTop: 18,
        width: "100%",
        backgroundColor: "#DDF5E6",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          ...Typography.button,
          color: Colors.text,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
