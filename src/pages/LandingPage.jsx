import Navbar from '../components/Navbar';
import Homepage from '../components/HomePage';
import ProcessPart from '../components/Process';
function LandingPage() {
  return (
    <div className="bg-white h-full relative">
      <Navbar />
      <Homepage />
      <ProcessPart />
    </div>
  );
}

export default LandingPage;
