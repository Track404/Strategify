import Navbar from '../components/Navbar';
import Homepage from '../components/HomePage';
import ProcessPart from '../components/Process';
import InnovativePart from '../components/Innovative';
import PricingPart from '../components/Pricing';
import CallToAction from '../components/CallToAction';
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
