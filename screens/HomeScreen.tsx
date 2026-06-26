import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomTab from "../components/BottomTab";
import CategoryCard from "../components/CategoryCard";
import Header from "../components/Header";
import HelpCard from "../components/HelpCard";

const categories = [
  {
    id: 1,
    title: "Groceries",
    image: require("../assets/images/groceries.webp"),
  },
  {
    id: 2,
    title: "Vegetables",
    image: require("../assets/images/vegetables.webp"),
  },
  {
    id: 3,
    title: "Fruits",
    image: require("../assets/images/fruits.webp"),
  },
  {
    id: 4,
    title: "Dairy",
    image: require("../assets/images/dairy.webp"),
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Categories" showBackButton={false} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 18,
          paddingBottom: 110,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {categories.map((item) => (
            <CategoryCard key={item.id} title={item.title} image={item.image} />
          ))}
        </View>

        <HelpCard />
      </ScrollView>

      <BottomTab />
    </SafeAreaView>
  );
}
