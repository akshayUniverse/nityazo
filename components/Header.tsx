import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import BackIcon from "../assets/logos/back.svg";
import { HeaderStyles } from "../styles/Header.styles";

type Props = {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
};

export default function Header({
  title,
  subtitle,
  showBackButton = true,
}: Props) {
  return (
    <View style={HeaderStyles.container}>
      {showBackButton ? (
        <Pressable
          style={HeaderStyles.backButton}
          onPress={() => router.back()}
        >
          <BackIcon width={22} height={22} />
        </Pressable>
      ) : (
        <View style={HeaderStyles.placeholder} />
      )}

      <View style={HeaderStyles.center}>
        <Text style={HeaderStyles.title}>{title}</Text>

        {subtitle && <Text style={HeaderStyles.subtitle}>{subtitle}</Text>}
      </View>

      <View style={HeaderStyles.placeholder} />
    </View>
  );
}
