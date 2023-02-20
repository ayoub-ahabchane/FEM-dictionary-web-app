import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function App() {
  return (
    <div className="mx-auto flex h-full max-w-3xl flex-col px-6 pt-6 md:px-10 md:pt-14">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
