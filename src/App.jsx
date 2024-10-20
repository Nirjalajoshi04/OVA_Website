import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials, CaseStudies, Contact, Footer, Hero, Process, Services, Team , CTA} from './container';
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
  </div>
);

export default App;
