import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkModeToggle, setDarkModeToggle] = useState<boolean>(false);

  // localStorage is only available after the page has loaded on the client and the window object has been defined
  // useEffect runs only on the client side so it will be available
  useEffect(() => {
    setDarkModeToggle(localStorage.getItem("theme") === "dark");
  }, []);

  useEffect(() => {
    if (darkModeToggle) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkModeToggle]);

  return (
    <>
      <input
        id="darkMode"
        type="checkbox"
        className="hidden"
        onChange={() => setDarkModeToggle(!darkModeToggle)}
        checked={darkModeToggle}
      ></input>
      <label htmlFor="darkMode" className="text-4xl select-none cursor-pointer">
        {darkModeToggle ? "🌑" : "🌞"}
      </label>
    </>
  );
};

export default DarkModeToggle;
