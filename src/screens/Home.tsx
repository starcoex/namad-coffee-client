import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Login from "../components/users/Login";

interface IAppContext {
  isLoggedIn: boolean;
}

export default function Home() {
  const { isLoggedIn } = useOutletContext<IAppContext>();

  return (
    <div>
      Home
      {isLoggedIn ? <Login /> : null}
      <Outlet />
    </div>
  );
}
