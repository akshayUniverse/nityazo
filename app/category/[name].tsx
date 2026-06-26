import { useLocalSearchParams } from "expo-router";

import CategoryScreen from "../../screens/CategoryScreen";

export default function CategoryPage() {
  const { name } = useLocalSearchParams();

  return <CategoryScreen title={String(name)} />;
}
