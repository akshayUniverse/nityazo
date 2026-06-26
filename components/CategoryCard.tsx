import { Image, Pressable, Text } from "react-native";
import { CategoryCardStyles } from "../styles/CategoryCard.styles";

type Props = {
  title: string;
  image: any;
  onPress?: () => void;
};

export default function CategoryCard({ title, image, onPress }: Props) {
  return (
    <Pressable style={CategoryCardStyles.container} onPress={onPress}>
      <Image source={image} style={CategoryCardStyles.image} />

      <Text style={CategoryCardStyles.title}>{title}</Text>
    </Pressable>
  );
}
