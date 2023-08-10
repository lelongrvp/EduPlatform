import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Content from "./Content";

export default function App() {
  const [isLogin, checkIsLogin] = useState(false);
  const [hasAccount, checkHasAccount] = useState(true);
  console.log(isLogin);
  return(
    <>
      {hasAccount && !isLogin && <Login {...{checkHasAccount, checkIsLogin}}/>}
      {!hasAccount && !isLogin && <SignUp {...{checkHasAccount}}/>}
      {isLogin && <Content/>}
    </>
  )
}