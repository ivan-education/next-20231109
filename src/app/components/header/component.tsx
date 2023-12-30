import Link from "next/link";
import classes from "./styles.module.scss";
import classnames from "classnames";
import { Button } from "../button/component";

interface Props {
  className: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={classnames(classes.header, className)}>
      <Button className={classes.header__button}>Order</Button>
    </header>
  );
};
export default Header;
