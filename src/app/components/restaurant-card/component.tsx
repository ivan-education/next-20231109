import { RestaurantEntity } from "@/app/types";
import classes from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

interface Props {
  restaurant: RestaurantEntity;
}
export const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  return (
    <Link
      href={`/restaurants/${restaurant.id}`}
      className={classes.card__wrapper}
    >
      <div className={classes.card}>
        <div>
          <Image
            src={restaurant.img}
            alt=""
            className={classes.card__img}
            width={100}
            height={100}
          />
        </div>
        <div className={classes.card_right}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
        </div>
      </div>
    </Link>
  );
};
