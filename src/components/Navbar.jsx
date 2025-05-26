function Navbar() {
  return (
    <div className="fixed top-0 navbar bg-white shadow-sm ">
      <div className="navbar-start">
        <h1 className="text-blue-500 text-3xl font-bold">Strategify</h1>
      </div>
      <div className="hidden md:flex navbar-center gap-10 text-neutral font-bold text-lg">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">About</a>
      </div>
      <div className="navbar-end">
        <button className="btn  btn-primary">Start Free</button>
      </div>
    </div>
  );
}

export default Navbar;
