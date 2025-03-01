import { ThemeProvider } from "./components/theme-provider"
import Dashboard from "./components/Dashboard"
import "./styles/globals.css"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
