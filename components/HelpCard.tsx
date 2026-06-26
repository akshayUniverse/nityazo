import { Text, View } from "react-native";
import { HelpCardStyles } from "../styles/HelpCard.styles";
import Button from "./Button";

export default function HelpCard() {
  return (
    <View style={HelpCardStyles.container}>
      <Text style={HelpCardStyles.title}>Need Help?</Text>

      <Text style={HelpCardStyles.subtitle}>
        our support team is ready to assist you
      </Text>

      <Text style={HelpCardStyles.subtitle}>
        with any questions or concerns.
      </Text>

      <Button title="Contact Us" />
    </View>
  );
}
