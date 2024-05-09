import { useEffect, useState, type FC } from "react";
import cx from "@/utils/cx";

const ThemeToggle: FC = () => {
 const [theme, setTheme] = useState("");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const themeLs = localStorage.getItem("theme");
    if (themeLs) {
      setTheme(themeLs);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={cx('theme-switcher')}>
      <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
    </div>
  );
}

export default ThemeToggle;
