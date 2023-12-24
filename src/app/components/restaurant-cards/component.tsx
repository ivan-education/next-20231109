import { normalizedRestaurants } from "@/constants/mock";
import { RestaurantEntity } from "@/app/types";
import Link from "next/link";

interface Props {
  restaurants: RestaurantEntity[];
}

const RestaurantCards: React.FC<Props> = ({ restaurants }) => {
  return (
    <div>
      <h3>Restaurants</h3>
      <ul>
        {restaurants.map(({ name, id }) => {
          return (
            <li key={id}>
              <Link href={`/restaurants/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantCards;
