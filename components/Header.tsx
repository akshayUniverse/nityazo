import { Pressable, Text, View } from "react-native";
import BackIcon from "../assets/logos/back.svg";

import { HeaderStyles } from "../styles/Header.styles";

type HeaderProps = {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
};

export default function Header({
  title,
  subtitle,
  showBackButton = true,
  onBackPress,
}: HeaderProps) {
  return (
    <View style={HeaderStyles.container}>
      {showBackButton ? (
        <>
          <Pressable style={HeaderStyles.backButton} onPress={onBackPress}>
            <BackIcon width={22} height={22} />
          </Pressable>

          <Text style={HeaderStyles.centerTitle}>{title}</Text>

          {/* keeps title perfectly centered */}
          <View style={HeaderStyles.placeholder} />
        </>
      ) : (
        <>
          <Text style={HeaderStyles.title}>{title}</Text>

          {subtitle ? (
            <Text style={HeaderStyles.subtitle}>{subtitle}</Text>
          ) : null}
        </>
      )}
    </View>
  );
}
