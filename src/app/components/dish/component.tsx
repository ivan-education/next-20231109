import { normalizedProducts } from "@/constants/mock";
interface Props {
  dishId: string;
}
const Dish: React.FC<Props> = ({ dishId }) => {
  const dish = normalizedProducts.find((item) => item.id === dishId);
  return (
    <div>
      <div>{dish?.name}</div>
    </div>
  );
};
export default Dish;
