import { normalizedRestaurants } from "@/constants/mock";
import { RestaurantEntity } from "@/app/types";
import classes from "./styles.module.scss";
import { RestaurantCard } from "../restaurant-card/component";

interface Props {
  restaurants: RestaurantEntity[];
}

const RestaurantCards: React.FC<Props> = ({ restaurants }) => {
  return (
    <ul className={classes.cards}>
      {restaurants.map((restaurant: RestaurantEntity) => {
        return (
          <li key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </li>
        );
      })}
    </ul>
  );
};
export default RestaurantCards;
