import React from "react";
import FontPicker from "./FontPicker";
import ThemeToggle from "./ThemeToggle";
import Searchbar from "./Searchbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="mb-11 font-sans md:mb-11">
      <div className="mb-6 flex h-6 items-center justify-between md:mb-14">
        <Logo />
        <div className="flex gap-4">
          <FontPicker />
          <div className="w-px bg-secondary-300" aria-hidden></div>
          <ThemeToggle />
        </div>
      </div>
      <Searchbar />
    </header>
  );
};

export default Header;
