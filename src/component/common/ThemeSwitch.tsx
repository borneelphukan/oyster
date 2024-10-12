import { useEffect, useState } from "react";
import Switch from "react-switch";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.add("transition");
    document.documentElement.classList.add("duration-1000");
    document.documentElement.classList.toggle("dark");
    setTimeout(() => {
      document.documentElement.classList.remove("transition");
      document.documentElement.classList.remove("duration-1000");
    }, 1000);
  };

  return (
    <div className="fixed z-50 bottom-5 right-10">
      <Switch
        onChange={toggleTheme}
        checked={theme === "dark"}
        checkedIcon={
          <div
            className={`flex items-center justify-center w-8 h-6 bg-black text-white rounded-full ${
              theme === "light" ? "&#127769;" : "text-white"
            }`}
          >
            <div className="p-2 pt-3">🌙</div>
          </div>
        }
        uncheckedIcon={
          <div
            className={`flex items-center justify-center w-10 h-6 text-black rounded-full ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <div className="p-2 pt-3">☀️</div>
          </div>
        }
        height={30}
        width={64}
        handleDiameter={24}
        offColor="#ededed"
        onColor="#000000"
      />
    </div>
  );
};

export default ThemeSwitch;
