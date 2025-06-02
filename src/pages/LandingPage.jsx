import Navbar from '../components/Navbar';
import Homepage from '../components/LandingPage/HomePage';
import ProcessPart from '../components/LandingPage/Process';
import InnovativePart from '../components/LandingPage/Innovative';
import PricingPart from '../components/LandingPage/Pricing';
import CallToAction from '../components/LandingPage/CallToAction';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="bg-white h-full relative">
      <Navbar />
      <Homepage />
      <ProcessPart />
      <InnovativePart />
      <PricingPart />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default LandingPage;
