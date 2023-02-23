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
    <div
      className={`font-${themeFont} mx-auto flex h-full max-w-3xl flex-col px-6 pt-6 md:px-10 md:pt-14`}
    >
      <Header />
      <main className={`grow pb-10 pt-44 md:pt-60`}>
        <AnimatePresence mode="wait">
          {navigation.state === "loading" ? (
            <motion.p
              key={"loading"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="animate-pulse text-center"
            >
              Loading...
            </motion.p>
          ) : (
            <Outlet />
          )}
        </AnimatePresence>
      </main>
      <footer className="pb-6 text-center text-sm text-secondary-400">
        A{" "}
        <a
          className="font-bold transition-colors duration-300 focus-within:text-accent hover:text-accent"
          href="https://www.frontendmentor.io"
          target="_blank"
        >
          Frontend Mentor
        </a>{" "}
        challenge by{" "}
        <a
          className="font-bold transition-colors duration-300 focus-within:text-accent hover:text-accent"
          href="https://www.frontendmentor.io/profile/ayoub-ahabchane"
          target="_blank"
        >
          Ayoub Ahabchane
        </a>
      </footer>
    </div>
  );
}

export default App;
