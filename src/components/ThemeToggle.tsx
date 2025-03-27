
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { Switch } from "./ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div className="flex items-center space-x-2">
      <Sun size={18} className="text-apple-lighttext dark:text-apple-blue" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      />
      <Moon size={18} className="text-apple-lighttext dark:text-apple-blue" />
    </div>
  )
}
