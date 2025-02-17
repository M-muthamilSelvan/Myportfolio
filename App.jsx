import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Project from "./Components/Project";
import "./App.css";


const App = () => {
    return(
        <div>
            <Header/>
            <Home/>
            <About/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;