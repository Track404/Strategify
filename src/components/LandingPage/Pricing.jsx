import { ChartColumn, Users, Lightbulb } from 'lucide-react';

function PricingPart() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="hero  text-neutral lg:p-5  ">
          <div className="hero-content flex-col  text-center ">
            <div className="text-success text-lg">Affordable</div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold capitalize">
                Pricing Plans
              </h1>
              <p className="py-6 text-lg sm:text-xl">
                unlock your marketing potential with our affordable pricing
                options designed to scale with your business.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex text-start   text-black gap-3">
                <ChartColumn size="40" className="text-blue-500 w-25" />
                <div>
                  <h3 className="font-bold text-2xl mb-2 ">
                    Advanced Analytics
                  </h3>
                  <p className="text-lg">
                    Get detailed insights into your marketing performance with
                    comprehensive analytics and reporting tools.
                  </p>
                </div>
              </div>
              <div className="flex text-start   text-black gap-3">
                <Users size="40" className="text-blue-500 w-25" />
                <div>
                  <h3 className="font-bold text-2xl mb-2 ">
                    Audience Targeting
                  </h3>
                  <p className="text-lg">
                    Identify and reach your ideal customers with precision
                    targeting and segmentation capablities.
                  </p>
                </div>
              </div>
              <div className="flex text-start   text-black gap-3">
                <Lightbulb size="40" className="text-blue-500 w-25" />
                <div>
                  <h3 className="font-bold text-2xl mb-2 ">
                    Strategy Templates
                  </h3>
                  <p className="text-lg">
                    Access a library of proven marketing strategy templates to
                    kickstart your campaigns and save time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center align-middle items-center  ">
          <div className="card w-70 md:w-[40vw] bg-white shadow-sm mb-4">
            <div className="card-body text-black">
              <span className="badge badge-xs badge-info">Free</span>
              <div className="flex justify-between">
                <h2 className="text-3xl  font-bold">Free Preview</h2>
                <span className="text-xl">0$</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Basic Strategy Preview</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm"> Strategy Template</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Limited Recommendation</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Strategy Overview</span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through text-sm">
                    Export to PDF & Notion
                  </span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through text-sm">Email Support</span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through text-sm">Full Analytics</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-outline btn-block">
                  Start For Free
                </button>
              </div>
            </div>
          </div>
          <div className="card w-70 md:w-[40vw] bg-white shadow-sm mb-4">
            <div className="card-body text-black">
              <span className="badge badge-xs badge-warning">Most Popular</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold text-blue-500 ">
                  Full Access
                </h2>
                <span className="text-xl">9$</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Complete Strategy Access</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Strategy Template</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">All Recommendation</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Strategy Overview</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Export to PDF and Notion</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Email Support</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Full Analytics</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block">Start Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingPart;
