import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`relative w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 flex items-center ${
        theme === "light" ? "bg-gray-300" : "bg-gray-700"
      }`}
      onClick={toggleTheme}
    >
      <div
        className={`absolute w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          theme === "light"
            ? "translate-x-0 bg-white"
            : "translate-x-6 bg-gray-900"
        }`}
      >
        {theme === "light" ? (
          <Sun className="text-yellow-500 w-3 h-3" />
        ) : (
          <Moon className="text-gray-300 w-3 h-3" />
        )}
      </div>
    </div>
  );
};

export default Switch;
