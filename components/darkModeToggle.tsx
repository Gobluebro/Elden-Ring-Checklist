import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("dark", false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <input
        id="darkMode"
        type="checkbox"
        className="hidden"
        onChange={() => setIsDarkMode(!isDarkMode)}
        checked={isDarkMode}
      ></input>
      <label htmlFor="darkMode" className="text-4xl select-none cursor-pointer">
        {isDarkMode ? "🌑" : "🌞"}
      </label>
    </>
  );
};

export default DarkModeToggle;
