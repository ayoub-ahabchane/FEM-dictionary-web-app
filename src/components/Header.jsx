import React from "react";
import FontPicker from "./FontPicker";
import ThemeToggle from "./ThemeToggle";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <header className="mb-6 font-sans md:mb-11">
      <div className="mb-6 flex h-6 items-center justify-between md:mb-14">
        <div>Logo</div>
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
