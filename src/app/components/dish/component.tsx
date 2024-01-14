"use client";

import { normalizedProducts } from "@/constants/mock";
import classes from "./styles.module.scss";
import { useState } from "react";
import { Counter } from "../counter/component";

interface Props {
  dishId: string;
}
const Dish: React.FC<Props> = ({ dishId }) => {
  const [count, setCount] = useState(0);

  const dish = normalizedProducts.find((item) => item.id === dishId);
  return (
    <div className={classes.dish}>
      <div>
        <div className={classes.dish__name}>{dish?.name}</div>
        <div>Price: {dish?.price}</div>
      </div>
      <Counter count={count} onUpdateCount={(n) => setCount(n)} />
    </div>
  );
};
export default Dish;
