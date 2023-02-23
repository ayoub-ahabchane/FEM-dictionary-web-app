import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../store/context/ThemeCtx";
import { AnimatePresence, motion } from "framer-motion";

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
      <main className={`font-${themeFont} pb-10 pt-44 md:pt-60`}>
        <AnimatePresence mode="wait">
          {navigation.state === "loading" ? (
            <motion.p
              key={"loading"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="animate-pulse"
            >
              Loading...
            </motion.p>
          ) : (
            <Outlet />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
