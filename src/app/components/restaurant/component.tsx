import { DishEntity, RestaurantEntity } from "@/app/types";
import Dish from "../dish/component";

interface Props {
  restaurant: RestaurantEntity;
  className?: string;
}
const Restaurant: React.FC<Props> = ({ restaurant, className }) => {
  return (
    <div>
      <h3>{restaurant.name}</h3>
      <p>{restaurant.id}</p>
      <p>{restaurant.description}</p>
      <div>
        <b>Menu:</b>
        {restaurant.menu.map((id: string) => (
          <Dish key="id" dishId={id} />
        ))}
      </div>
    </div>
  );
};
export default Restaurant;
