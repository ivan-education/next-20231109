"use client";

import Link from "next/link";
import classes from "./styles.module.scss";
import classNames from "classnames";
import { RestaurantEntity } from "@/app/types";
import { normalizedRestaurants } from "@/constants/mock";
import { Button } from "@/app/components/button/component";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  params: { restaurantId: string };
}
const RestaurantPage: React.FC<Props> = ({
  children,
  params: { restaurantId },
}) => {
  const restaurant = normalizedRestaurants.find(
    (item) => item.id === restaurantId
  ) as RestaurantEntity;

  const pathname = usePathname();

  return (
    <section className={classNames(classes.restaurant, "container")}>
      <div>
        <Link href="/restaurants">
          <Button className={classes.restaurant__backBtn}>Restaurants</Button>
        </Link>
        <h2 className={classes.restaurant__name}>{restaurant.name}</h2>
      </div>
      <div className={classes.restaurant__tab}>
        <Link
          href="menu"
          className={`${classes.restaurant__tabLink} ${
            pathname.endsWith("menu") ? "active" : ""
          }`}
        >
          Menu
        </Link>
        <Link
          href="reviews"
          className={`${classes.restaurant__tabLink} ${
            pathname.endsWith("reviews") ? "active" : ""
          }`}
        >
          Reviews
        </Link>
      </div>

      {children}
    </section>
  );
};
export default RestaurantPage;
