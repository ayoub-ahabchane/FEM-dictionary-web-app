import React from "react";
import FontPicker from "./FontPicker";
import ThemeToggle from "./ThemeToggle";
import Searchbar from "./Searchbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header
      className="fixed left-0 right-0 top-0 mx-auto max-w-3xl bg-white px-6 pt-6 pb-10 font-sans shadow-lg shadow-white transition-all duration-300 dark:bg-primary-600 dark:shadow-primary-600 md:mb-11 md:px-10 md:pt-14 md:pb-16
    "
    >
      <div className="mb-6 flex h-8 items-center justify-between md:mb-14">
        <Logo />
        <div className="flex gap-4 md:gap-6">
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
