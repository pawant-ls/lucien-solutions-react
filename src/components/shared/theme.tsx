import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-gray-300 dark:hover:bg-gray-700 active:scale-95 transform"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-6 h-6 text-gray-800" />
      ) : (
        <Sun className="w-6 h-6 text-primary" />
      )}
    </button>
  );
};

export default ThemeChanger;
