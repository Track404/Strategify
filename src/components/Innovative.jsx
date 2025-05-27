import strategy from '../assets/strategy.jpg';
import webinterface from '../assets/webinterface.jpg';
import analytics from '../assets/analytics.jpg';
function InnovativePart() {
  return (
    <div className="hero bg-white text-neutral min-h-screen lg:p-5 ">
      <div className="hero-content flex-col  text-center ">
        <div className="text-success text-lg">Innovative</div>
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold capitalize">
            Transform Your Marketing Strategy With Ease
          </h1>
          <p className="py-6 text-lg sm:text-xl">
            We simplify the marketing palnning process, allowing you to focus on
            what matters most growing your business and connecting with your
            audience.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="card  shadow-md bg-gray-100 p-1 w-[75vw] lg:w-[30vw] ">
            <figure>
              <img src={strategy} alt="Marketing Strategy" />
            </figure>
            <div className="card-body ">
              <h2 className="font-bold text-2xl md:text-3xl  ">
                User-Friendly Interface for Seamless Experience
              </h2>
              <p className="md:text-lg xl:text-xl ">
                Oour intuitive platform makes creating marketing strategies
                simple and accessible for everyone, regardless of experience
                level.
              </p>
            </div>
          </div>
          <div className="card  shadow-md bg-gray-100 p-1 w-[75vw] lg:w-[30vw] ">
            <figure>
              <img src={webinterface} alt="Web Interface" />
            </figure>
            <div className="card-body ">
              <h2 className="font-bold text-2xl md:text-3xl ">
                Tailored Solutions for Every Buisiness Type
              </h2>
              <p className="md:text-lg xl:text-xl ">
                Get customized marketing strategies that align with your
                specific, buisness goals, and target audience.
              </p>
            </div>
          </div>
          <div className="card  shadow-md bg-gray-100 p-1 w-[75vw] lg:w-[30vw] ">
            <figure>
              <img src={analytics} alt="Data Analytics" />
            </figure>
            <div className="card-body ">
              <h2 className="font-bold text-2xl md:text-3xl ">
                Data-Driven Insights for Informed Decisions
              </h2>
              <p className="md:text-lg xl:text-xl ">
                Leverage powerful analytics and market research to create
                strategies backed by real data and proven methodologies.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button className="btn btn-primary md:btn-lg">Explore</button>
          <button className="btn btn-dash btn-secondary md:btn-lg ml-4">
            Start Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default InnovativePart;
