import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../store/context/ThemeCtx";

function App() {
  const { themeColor } = useContext(ThemeContext);

  useEffect(() => {
    if (themeColor === "light") {
      document.querySelector("html").classList.remove("dark");
    } else if (themeColor === "dark") {
      document.querySelector("html").classList.add("dark");
    }
  }, [themeColor]);

  return (
    <div className="mx-auto flex h-full max-w-3xl flex-col px-6 pt-6 md:px-10 md:pt-14">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
