import Navbar from '../components/Navbar';
import Homepage from '../components/HomePage';
import ProcessPart from '../components/Process';
import InnovativePart from '../components/Innovative';
import PricingPart from '../components/Pricing';
function LandingPage() {
  return (
    <div className="bg-white h-full relative">
      <Navbar />
      <Homepage />
      <ProcessPart />
      <InnovativePart />
      <PricingPart />
    </div>
  );
}

export default LandingPage;
