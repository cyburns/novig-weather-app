import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
  const smallScreenSize = useMediaQuery("(min-width:567px)");

  return (
    <nav className="z-[999] w-full h-16 flex flex-row justify-between px-5 py-3">
      <div className="py-1">
        <a className="capitalize text-white text-md " href="/">
          WEATHER.IO
        </a>
      </div>
      {!smallScreenSize ? (
        <div className="mx-2">
          <button className="capitalize text-white text-md  hover:text-white/50 transition">
            <Menu />
          </button>
        </div>
      ) : (
        <div>
          <button>
            <a
              className="capitalize text-white text-md mr-10 hover:text-white/50 transition"
              href="/"
            >
              HELP
            </a>
          </button>
          <button className="bg-white bg-opacity-10 px-5 py-1 rounded-md hover:bg-opacity-5 transition">
            <a className="capitalize text-white text-md" href="/">
              LOG OUT
            </a>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
