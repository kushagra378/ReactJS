import { useContext } from "react";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AuthContext from "../../store/auth-context";

const MainHeader = () => {
  const ctx = useContext(AuthContext);
  return (
    <header className={classes["main-header"]}>
      {!ctx.isLoggedIn && <h1>Login</h1>}
      {ctx.isLoggedIn && <h1>Expense Tracker</h1>}
      <Navigation />
    </header>
  );
};

export default MainHeader;
