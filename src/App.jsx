import Aboutme from "./pages/Aboutme";
import Contactus from "./pages/Contactus";
import Footer from "./pages/Footer";
import Home from "./Pages/Home";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Tech from "./pages/Tech";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Aboutme />
      <Projects />
      <Tech />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
