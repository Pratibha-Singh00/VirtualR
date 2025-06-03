//you should always add (new file of import)  section on the top of the all imported files
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials" 
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"; /*rface*/

 
const App = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/></div>
      <FeatureSection/>
      <Workflow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </>
    
  )
}

export default App
