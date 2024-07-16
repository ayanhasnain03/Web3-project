import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Welcome from "./components/Welcome";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
  </div>
);

export default App;
