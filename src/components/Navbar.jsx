function Navbar() {
  return (
    <div className="fixed top-0 navbar bg-white shadow-sm z-50 ">
      <div className="navbar-start">
        <h1 className="text-blue-500 text-3xl lg:text-4xl font-bold">
          Strategify
        </h1>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 text-black">
          <li>
            <details>
              <summary>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {' '}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{' '}
                </svg>
              </summary>
              <ul className="bg-white rounded-t-none font-semibold text-lg  w-50 ">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Start Now</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <button className="btn xl:btn-lg  btn-primary">Start Free</button>
      </div>
    </div>
  );
}

export default Navbar;
