
import './App.css';
import Header from './Header';
import LandingSection from "./LandingSection"
import Kitchen from "./Kitchen";
import Carousel from './Carousel';
import Service from "./service";
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <section className='imp' id='imp'>

      <Header />
      <LandingSection />
      <Kitchen  /> 
      <Carousel />
      <Service />
      <Contact />
      <Footer />
    </section>
  );
}
export default App;
