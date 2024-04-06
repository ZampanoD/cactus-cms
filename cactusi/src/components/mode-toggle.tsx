import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon" className="pb-2 pl-0 hover:bg-transparent">
      {theme === "light" ? (
        <FaMoon className="cursor-pointer text-white" size={30}/>
      ) : (
        <FaSun className="cursor-pointer text-white" size={30}/>
      )}
    </Button>
  );
}
