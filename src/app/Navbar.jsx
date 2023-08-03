import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {} from "react-icons/ai";
import {} from "react-icons/gr";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const routes = [
    {
      route: "home",
      path: "/",
    },
    {
      route: "about",
      path: "/about",
    },
    {
      route: "services",
      path: "/services",
    },
    {
      route: "contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <nav className="w-screen px-5 py-3 bg-white flex justify-between items-center relative shadow-md">
        <NavLink to={"/"}>
          <h1 className="text-2xl tracking-widest">
            <span className="text-red-500">Pra</span>
            <span className="text-blue-500">nav</span>
          </h1>
        </NavLink>

        <ul className={`toggle_ul ${toggle}`}>
          {routes.map((r, i) => {
            return (
              <li key={i} onClick={() => setToggle(false)}>
                <NavLink
                  to={r.path}
                  className={({ isActive }) => {
                    if (isActive)
                      return "font-semibold underline underline-offset-4";
                  }}
                >
                  {r.route}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div
          className="block sm:hidden text-xl bg-gra-200 h-fit w-fit  absolute  right-3 div-icon"
          onClick={() => setToggle(!toggle)}
        >
          <div className={`div1 ${toggle}`}></div>
          <div className={`div2 ${toggle}`}></div>
          <div className={`div3 ${toggle}`}></div>
        </div>
      </nav>
    </>
  );
}
