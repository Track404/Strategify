function CallToAction() {
  return (
    <div className="hero bg-blue-500 text-white min-h-screen lg:p-5 ">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-start">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold capitalize">
            Start Creating Your Strategy For Free
          </h1>
          <p className="py-6 text-lg sm:text-xl">
            No credit card required. Fill out our form, get your strategy
            preview instantly, and updrade only when you're ready.
          </p>
          <button className="btn text-blue-500 btn-outline bg-white md:btn-lg hover:bg-blue-500 hover:text-white">
            Start For Free
          </button>
          <button className="btn btn-dash  bg-blue-500 text-white md:btn-lg ml-4 hover:bg-white hover:text-blue-500">
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
