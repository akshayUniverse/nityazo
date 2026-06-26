import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomTab from "../components/BottomTab";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { categoryProducts } from "../data/categories";

type Props = {
  title: string;
};

export default function CategoryScreen({ title }: Props) {
  const products =
    categoryProducts[title.toLowerCase() as keyof typeof categoryProducts] ??
    [];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title={title} />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            id={item.id}
            title={item.title}
            weight={item.weight}
            price={item.price}
            image={item.image}
          />
        )}
        numColumns={2}
        contentContainerStyle={{
          padding: 12,
          paddingBottom: 90,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 12,
        }}
        showsVerticalScrollIndicator={false}
      />

      <BottomTab active="categories" />
    </SafeAreaView>
  );
}
