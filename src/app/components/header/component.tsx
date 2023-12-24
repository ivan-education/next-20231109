import Link from "next/link";
import classes from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <header>
      <b>Header</b>
      <Link href="/" className={classes.link}>
        Root
      </Link>
      <Link href="/restaurants" className={classes.link}>
        Restaurants
      </Link>
    </header>
  );
};
export default Header;
