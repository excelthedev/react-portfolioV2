import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Aboutme from "./Components/Aboutme";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="app">
      <main>
        <Header />
        <Aboutme />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
