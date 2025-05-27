import BackgroundHome from '../assets/BackgroundHome.jpg';
function Homepage() {
  return (
    <div
      className="hero bg-base min-h-screen lg:p-5 relative"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${BackgroundHome})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse text-center text-neutral-content  ">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold capitalize text-white">
            Transform your marketing strategy in minutes
          </h1>
          <p className="py-6 text-lg sm:text-xl lg:text-2xl font-semibold text-white">
            Start for free! Fill out a simple form, get an instant preview of
            your customized marketing strategy, and upgrade only when you're
            ready for the full plan.
          </p>
          <button className="btn btn-primary md:btn-lg">Start For Free</button>
          <button className="btn btn-secondary md:btn-lg ml-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
