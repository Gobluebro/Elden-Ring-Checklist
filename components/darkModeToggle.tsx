import { IconMoonStars, IconSun } from "@tabler/icons";
import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const iconStyles = "text-yellow-500 dark:text-white absolute w-6 h-6 z-10";

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
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            onChange={() => setIsDarkMode(!isDarkMode)}
            checked={isDarkMode}
            className="sr-only"
          />

          <div className="block w-14 h-8 border-2 border-neutral-800 dark:border-zinc-100 rounded-full"></div>

          <div className="dot absolute left-1 top-1 w-6 h-6 rounded-full bg-yellow-100 dark:bg-purple-900 transition dark:translate-x-full">
            <IconMoonStars
              size={30}
              stroke={2}
              className={`${iconStyles} hidden dark:inline`}
            />
            <IconSun
              size={30}
              stroke={2}
              className={`${iconStyles} inline dark:hidden`}
            />
          </div>
        </div>
      </label>
    </>
  );
};

export default DarkModeToggle;
