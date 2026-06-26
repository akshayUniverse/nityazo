import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

import { ProductCardStyles } from "../styles/ProductCard.styles";

type Props = {
  id: string;
  title: string;
  weight: string;
  price: string;
  image: any;
};

export default function ProductCard({
  id,
  title,
  weight,
  price,
  image,
}: Props) {
  return (
    <Pressable
      style={ProductCardStyles.container}
      onPress={() =>
        router.push({
          pathname: "/product/[id]",
          params: {
            id,
          },
        })
      }
    >
      <Image source={image} style={ProductCardStyles.image} />

      <View style={ProductCardStyles.content}>
        <Text style={ProductCardStyles.title}>{title}</Text>

        <Text style={ProductCardStyles.weight}>{weight}</Text>

        <View style={ProductCardStyles.bottomRow}>
          <Text style={ProductCardStyles.price}>{price}</Text>

          <Pressable style={ProductCardStyles.button}>
            <Text style={ProductCardStyles.buttonText}>Add</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}
