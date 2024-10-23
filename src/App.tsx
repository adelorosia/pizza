import { useSelector } from "react-redux";
import DarkMode from "./components/darkMode/DarkMode";
import { AppRouter } from "./routes";
import { CiPizza } from "react-icons/ci";
import { RootState } from "./feature/store";
import { IoCarSportOutline } from "react-icons/io5";

const App = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.app);
  return (
    <div
      className={`${
        isDarkMode
          ? " bg-bg_DARK text-PRIMARY_WHITE "
          : " bg-bg_LIGHT text-PRIMARY_BLACK "
      }`}
    >
      <header className={`${isDarkMode ? " shadow-md" : "shadow-sm"} `}>
        <nav className="flex  px-5 py-6 gap-4 font-FONT_VIGA  justify-between container items-center">
          <div className="flex items-center gap-2">
            <CiPizza className="w-10 h-10 text-PRIMARY_RED" />
            <h1 className="text-2xl font-extrabold">Pizza Boys</h1>
          </div>
          <div className="flex gap-4 text-2xl">
            <IoCarSportOutline className="icon cursor-pointer"/>
            <DarkMode />
          </div>
        </nav>
      </header>
      <main
        className={`
        flex justify-center items-center min-h-screen  font-FONT_ROBOTO`}
      >
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
