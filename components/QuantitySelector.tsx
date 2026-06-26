import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { QuantitySelectorStyles } from "../styles/QuantitySelector.styles";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={QuantitySelectorStyles.container}>
      <Text style={QuantitySelectorStyles.label}>Quantity</Text>

      <View style={QuantitySelectorStyles.controls}>
        <Pressable
          style={QuantitySelectorStyles.button}
          onPress={() => quantity > 1 && setQuantity(quantity - 1)}
        >
          <Text style={QuantitySelectorStyles.buttonText}>−</Text>
        </Pressable>

        <Text style={QuantitySelectorStyles.quantity}>{quantity}</Text>

        <Pressable
          style={QuantitySelectorStyles.button}
          onPress={() => setQuantity(quantity + 1)}
        >
          <Text style={QuantitySelectorStyles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}
