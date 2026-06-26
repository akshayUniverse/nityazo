import { ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import { Colors } from "../constants/colors";
import { Typography } from "../constants/typography";

type Props = {
  title: string;
  onPress?: () => void;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function Button({
  title,
  onPress,
  icon,
  variant = "secondary",
  style,
  textStyle,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          marginTop: 18,
          width: "100%",
          height: 54,
          borderRadius: 10,
          backgroundColor:
            variant === "primary" ? Colors.primary : Colors.success,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      {icon && <View style={{ marginRight: 8 }}>{icon}</View>}

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
