import Navbar from '../components/Navbar';
import Homepage from '../components/HomePage';
import ProcessPart from '../components/Process';
import InnovativePart from '../components/Innovative';
function LandingPage() {
  return (
    <div className="bg-white h-full relative">
      <Navbar />
      <Homepage />
      <ProcessPart />
      <InnovativePart />
    </div>
  );
}

export default LandingPage;
