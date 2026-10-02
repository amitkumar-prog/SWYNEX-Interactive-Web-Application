import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedEvents from "./Components/FeaturedEvents";
import Categories from "./Components/Categories";
import Why from "./Components/Why";
import EventDetails from "./Components/EventDetails";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    
    

    <Routes>

      <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <FeaturedEvents />
              <Categories />
              <Why />
            </>
          }
        />
      <Route path="/events/:id" element={<EventDetails/>}/>

    </Routes>

    
  );
}



export default App;