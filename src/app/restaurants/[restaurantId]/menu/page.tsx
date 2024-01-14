import { Menu } from "@/app/components/menu/component";
import { RestaurantEntity } from "@/app/types";
import { normalizedRestaurants } from "@/constants/mock";

interface Props {
  params: { restaurantId: string };
}

const MenuPage: React.FC<Props> = ({ params: { restaurantId } }) => {
  const restaurant = normalizedRestaurants.find(
    (item) => item.id === restaurantId
  ) as RestaurantEntity;

  return <Menu menuIds={restaurant.menu} />;
};
export default MenuPage;
