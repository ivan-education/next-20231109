import RestaurantCards from "../components/restaurant-cards/component";
import { normalizedRestaurants } from "@/constants/mock";

export default function RestaurantsPage() {
  return <RestaurantCards restaurants={normalizedRestaurants} />;
}
