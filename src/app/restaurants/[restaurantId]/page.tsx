import Restaurant from "@/app/components/restaurant/component";
import { RestaurantEntity } from "@/app/types";
import { normalizedRestaurants } from "@/constants/mock";

interface Props {
  params: { restaurantId: string };
}

const RestaurantPage: React.FC<Props> = ({ params: { restaurantId } }) => {
  const restaurant = normalizedRestaurants.find(
    (item) => item.id === restaurantId
  ) as RestaurantEntity;
  return <Restaurant restaurant={restaurant} />;
};
export default RestaurantPage;
