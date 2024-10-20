import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials, CaseStudies, Contact, Footer, Hero, Process, Services, Team , CTA} from './container';
import FacebookPagePlugin from "./components/FacebookPagePlugin";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import DonateNow from './components/DonateNow/DonateNow';
import { Menu } from './components';
import './index.css';




const App = () => (
  <div className="container">
    <Menu />
    <Hero />
    <br/>
    <Services />
    <CTA />
    <CaseStudies />
    <Process />
    <Team />
    <Testimonials />
    <Contact />
    <Footer />
    <ScrollToTop />
    <DonateNow />
  </div>
);

export default App;
