import classes from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
}
const RestaurantLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={classNames(classes.restaurantPage, "container")}>
      {children}
    </div>
  );
};
export default RestaurantLayout;
