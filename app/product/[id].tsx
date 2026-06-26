import { useLocalSearchParams } from "expo-router";
import ProductScreen from "../../screens/ProductScreen";

export default function ProductPage() {
  const { id } = useLocalSearchParams();

  return <ProductScreen id={String(id)} />;
}
