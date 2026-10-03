import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedEvents from "./Components/FeaturedEvents";
import Categories from "./Components/Categories";
import Why from "./Components/Why";
import EventDetails from "./Components/EventDetails";
import EventRegistrations from "./Components/EventRegistrations";
import Registrations from "./Components/Registrations";
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
              <Footer/>
            </>
          }
        />
      <Route path="/events/:id" element={<EventDetails/>}/>
      <Route path="/EventRegistrations" element={<EventRegistrations/>}/>
      <Route path="/Registrations" element={<Registrations/>}/>
      <Route path="/registrations/:id" element={<EventRegistrations />}
/>

    </Routes>

    
  );
}



export default App;