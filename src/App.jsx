import './App.css';
import Home from "./Components/Home/home"
import Footer from "./Components/Footer/footer"
import Slide from "./Components/Slide/slide"
import Navbar from "./Components/Navbar/Navbar"
function App() {
  return (
    <div>
      <Home/>
      {/* <Navbar/> */}
      <Slide/>
      <Footer/>
      
    </div>
  );
}

export default App;


