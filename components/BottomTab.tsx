import { Pressable, Text, View } from "react-native";

import CategoriesIcon from "../assets/logos/categories.svg";
import HomeIcon from "../assets/logos/home.svg";
import OrdersIcon from "../assets/logos/orders.svg";
import ProfileIcon from "../assets/logos/profile.svg";

import { BottomTabStyles } from "../styles/BottomTab.styles";

type Props = {
  active?: "home" | "categories" | "orders" | "profile";
  backgroundColor?: string;
};

export default function BottomTab({
  active,
  backgroundColor = "#FAFAFA",
}: Props) {
  return (
    <View
      style={[
        BottomTabStyles.container,
        {
          backgroundColor,
        },
      ]}
    >
      <TabItem title="Home" Icon={HomeIcon} active={active === "home"} />

      <TabItem
        title="Categories"
        Icon={CategoriesIcon}
        active={active === "categories"}
      />

      <TabItem title="Orders" Icon={OrdersIcon} active={active === "orders"} />

      <TabItem
        title="Profile"
        Icon={ProfileIcon}
        active={active === "profile"}
      />
    </View>
  );
}

type TabProps = {
  title: string;
  Icon: React.FC<any>;
  active: boolean;
};

function TabItem({ title, Icon, active }: TabProps) {
  return (
    <Pressable
      style={[BottomTabStyles.item, active && BottomTabStyles.activeItem]}
    >
      <Icon width={22} height={22} />

      <Text
        style={[BottomTabStyles.label, active && BottomTabStyles.activeLabel]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
