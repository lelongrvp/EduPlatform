import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Content from "./Content";
import DetailsContent from "./DetailsContent/DetailsContent";
//css
import "./App.css";

export default function App() {
  const [isLogin, checkIsLogin] = useState(false);
  const [hasAccount, checkHasAccount] = useState(true);
  const [showDetails, showFullDetails] = useState(false);
  console.log(isLogin);
  return(
    <>
      {hasAccount && !isLogin && <Login {...{checkHasAccount, checkIsLogin}}/>}
      {!hasAccount && !isLogin && <SignUp {...{checkHasAccount}}/>}
      {isLogin && !showDetails && <Content {...{showFullDetails}}/>}
      {isLogin && showDetails && <DetailsContent {...{showFullDetails}}/>}
    </>
  )
}