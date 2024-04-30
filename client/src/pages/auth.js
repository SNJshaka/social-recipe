import React, { useState } from "react";
import Login  from "../components/Login";
import Register  from "../components/Register";

export const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="auth">
      {showLogin ? <Login switchForm={() => setShowLogin(false)} /> : <Register switchForm={() => setShowLogin(true)} />}
    </div>
  );
};
