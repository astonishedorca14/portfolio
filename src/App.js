import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Footer from "./components/footer";
import resume from "./assets/coming-soon.pdf";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import ChengduTaste from "./pages/portfolio-pages/chengdu-taste";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/*default route*/}
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Portfolio />} />
                <Route path="/resume" a={resume}/>

                {/*work routes*/}
                <Route path="/work/chengdu-taste" element={<ChengduTaste />} />


            </Routes>
        </BrowserRouter>
      </header>
        <Footer/>
    </div>
  );
}

export default App;
