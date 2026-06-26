import { useState } from "react";
import { Image, Pressable, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomTab from "../components/BottomTab";
import Button from "../components/Button";
import Header from "../components/Header";
import QuantitySelector from "../components/QuantitySelector";
import { getProductById } from "../data/products";
import { ProductScreenStyles } from "../styles/ProductScreen.styles";

type Props = {
  id: string;
};

export default function ProductScreen({ id }: Props) {
  const product = getProductById(id);

  const [expanded, setExpanded] = useState(false);

  if (!product) return null;

  return (
    <SafeAreaView style={ProductScreenStyles.container}>
      <Header title={product.title} />

      <ScrollView
        contentContainerStyle={ProductScreenStyles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image source={product.image} style={ProductScreenStyles.image} />

        <Text style={ProductScreenStyles.title}>{product.title}</Text>

        <Text style={ProductScreenStyles.weight}>{product.weight}</Text>

        <Text style={ProductScreenStyles.price}>{product.price}</Text>

        <QuantitySelector />

        <Text style={ProductScreenStyles.heading}>Description</Text>

        <Text
          numberOfLines={expanded ? undefined : 4}
          style={ProductScreenStyles.description}
        >
          {product.description}
        </Text>

        <Pressable onPress={() => setExpanded(!expanded)}>
          <Text style={ProductScreenStyles.readMore}>
            {expanded ? "Read less" : "Read more..."}
          </Text>
        </Pressable>

        <Button title="Add to Cart" variant="primary" />
      </ScrollView>

      <BottomTab active="categories" />
    </SafeAreaView>
  );
}
