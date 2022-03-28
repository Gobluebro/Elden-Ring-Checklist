import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("dark", false);
  // used for fixing hydration issue.
  const [buttonEmoji, setButtonEmoji] = useState<string>("🌞");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      setButtonEmoji("🌑");
    } else {
      document.documentElement.classList.remove("dark");
      setButtonEmoji("🌞");
    }
  }, [isDarkMode]);

  return (
    <>
      <button
        id="darkMode"
        className="text-4xl"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {buttonEmoji}
      </button>
    </>
  );
};

export default DarkModeToggle;
