import React, { useContext } from "react";

import Login from "./components/Login/Login";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker"
import AuthContext from "./store/auth-context";
import MainHeader from "./components/MainHeader/MainHeader"

function App() {
  const ctx = useContext(AuthContext)

  return (
    <React.Fragment>
      <MainHeader/>
      <main style={{marginTop : "7rem"}}>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <ExpenseTracker/>}
      </main>
    </React.Fragment>
  );
}

export default App;
