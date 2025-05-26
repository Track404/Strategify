import homepagePicture from '../assets/HomepagePicture.jpg';

function Homepage() {
  return (
    <div className="hero bg-base text-neutral min-h-screen lg:p-5 ">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-start">
        <img
          src={homepagePicture}
          alt="Homepage Illustration"
          className="max-w-sm mb-5 rounded-lg shadow-xl w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px]2xl:h-[600px] object-cover "
        />
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold capitalize">
            Transform your marketing strategy in minutes
          </h1>
          <p className="py-6 text-lg sm:text-xl">
            Start for free! Fill out a simple form, get an instant preview of
            your customized marketing strategy, and upgrade only when you're
            ready for the full plan.
          </p>
          <button className="btn btn-primary md:btn-lg">Start For Free</button>
          <button className="btn btn-dash btn-secondary md:btn-lg ml-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
