import { RestaurantEntity } from "@/app/types";

interface Props {
  restaurant: RestaurantEntity;
}
const Restaurant: React.FC<Props> = ({ restaurant }) => {
  return (
    <div>
      <h3>{restaurant.name}</h3>
      <p>{restaurant.id}</p>
      <p>{restaurant.description}</p>
    </div>
  );
};
export default Restaurant;
