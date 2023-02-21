import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../store/context/ThemeCtx";

function App() {
  const { themeColor, themeFont } = useContext(ThemeContext);
  const navigation = useNavigation();

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
      <main className={`font-${themeFont} pb-16 pt-44 md:pt-60`}>
        {navigation.state === "loading" ? "loading" : <Outlet />}
      </main>
    </div>
  );
}

export default App;
