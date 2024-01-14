import { redirect } from "next/navigation";

interface Props {
  params: { restaurantId: string };
}

const RestaurantPage: React.FC<Props> = ({ params: { restaurantId } }) => {
  redirect(`./${restaurantId}/menu`);
};
export default RestaurantPage;
