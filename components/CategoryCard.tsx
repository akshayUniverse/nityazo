import { router } from "expo-router";
import { Image, Pressable, Text } from "react-native";

import { CategoryCardStyles } from "../styles/CategoryCard.styles";

type Props = {
  title: string;
  image: any;
};

export default function CategoryCard({ title, image }: Props) {
  return (
    <Pressable
      style={CategoryCardStyles.container}
      onPress={() =>
        router.push({
          pathname: "/category/[name]",
          params: {
            name: title.toLowerCase(),
          },
        })
      }
    >
      <Image source={image} style={CategoryCardStyles.image} />

      <Text style={CategoryCardStyles.title}>{title}</Text>
    </Pressable>
  );
}
