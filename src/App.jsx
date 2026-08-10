import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import MartialArts from "./pages/MartialArts/MartialArts"
import MartialArtDetails from "./pages/MartialArtDetails/MartialArtDetails"
import Compare from "./pages/compare/Compare";


function App() {

  return (
    <>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/martial-arts" element={<MartialArts/>}/>
        <Route path="/martial-arts/:id" element={<MartialArtDetails/>}/>
        <Route path="/compare" element={<Compare/>}/>

      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
