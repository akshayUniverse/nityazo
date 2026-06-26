import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import { Colors } from "../constants/colors";
import { Typography } from "../constants/typography";

type Props = {
  title: string;
  variant?: "primary" | "secondary";
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function Button({
  title,
  variant = "secondary",
  style,
  textStyle,
}: Props) {
  return (
    <Pressable
      style={[
        {
          marginTop: 18,
          width: "100%",
          paddingVertical: 14,
          borderRadius: 10,
          alignItems: "center",
          backgroundColor:
            variant === "primary" ? Colors.primary : Colors.success,
        },
        style,
      ]}
    >
      <Text
        style={[
          {
            ...Typography.button,
            color: Colors.text,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
