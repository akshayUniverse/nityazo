import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

import { Colors } from "../constants/colors";
import { Typography } from "../constants/typography";

type Props = {
  title: string;
  onPress?: () => void;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  title,
  onPress,
  icon,
  variant = "primary",
}: Props) {
  const backgroundColor =
    variant === "primary" ? Colors.primary : Colors.success;

  return (
    <Pressable
      onPress={onPress}
      style={{
        marginTop: 18,
        width: "100%",
        height: 54,
        borderRadius: 10,
        backgroundColor,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon && <View style={{ marginRight: 8 }}>{icon}</View>}

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
