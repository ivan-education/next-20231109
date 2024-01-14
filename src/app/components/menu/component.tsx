import Dish from "../dish/component";
import classes from "./styles.module.scss";

interface Props {
  menuIds: string[];
}

export const Menu: React.FC<Props> = ({ menuIds }) => {
  return (
    <>
      <h3>Menu:</h3>
      <ul className={classes.dishes}>
        {menuIds.map((dishId: string) => {
          return (
            <li key={dishId} className={classes.dishes__container}>
              <Dish dishId={dishId} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
