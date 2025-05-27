function ProcessPart() {
  return (
    <div className="hero bg-gray-100 text-neutral min-h-screen lg:p-5 ">
      <div className="hero-content flex-col  text-center ">
        <div className="text-success text-lg">Simple Process</div>
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold capitalize">
            How it Works
          </h1>
          <p className="py-6 text-lg sm:text-xl">
            Get your marketing strategy in three simple steps - not required to
            pay to start.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="card  shadow-md bg-white w-[75vw] lg:w-[30vw] h-60 lg:h-70">
            <div className="card-body ">
              <h2 className="text-blue-500 font-bold text-2xl md:text-3xl ">
                1
              </h2>
              <h2 className="font-bold text-2xl md:text-3xl  ">
                Complete the Form
              </h2>
              <p className="md:text-lg xl:text-xl ">
                Fill out our simple questionnaire about your buisness, goals,and
                target audience.
              </p>
            </div>
          </div>
          <div className="card  shadow-md bg-white w-[75vw] lg:w-[30vw] h-60 lg:h-70">
            <div className="card-body ">
              <h2 className="text-blue-500 font-bold text-2xl md:text-3xl ">
                2
              </h2>
              <h2 className="font-bold text-2xl md:text-3xl ">
                Get Your Preview
              </h2>
              <p className="md:text-lg xl:text-xl ">
                Instantly receive a preview of your customized marketing
                strategy with key insights.
              </p>
            </div>
          </div>
          <div className="card  shadow-md bg-white w-[75vw] lg:w-[30vw] h-60 lg:h-70">
            <div className="card-body ">
              <h2 className="text-blue-500 font-bold text-2x md:text-3xl ">
                3
              </h2>
              <h2 className="font-bold text-2xl md:text-3xl ">
                Upgrade for Full Access
              </h2>
              <p className="md:text-lg xl:text-xl ">
                Like what you see? Upgrade to access the complete strategy and
                all premium features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessPart;
