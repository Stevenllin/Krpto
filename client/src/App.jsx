import Navbar from "./components/Navbar/Navbar"
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
    </div>
  )
}

export default App
