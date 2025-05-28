function Form1() {
  return (
    <>
      <h1 className="text-black font-bold text-4xl">Business Info</h1>
      <form className="flex gap-20">
        <div>
          <div className="flex flex-col mb-4">
            <label htmlFor="businessName" className="text-black mb-2">
              Business Name
            </label>
            <input
              type="text"
              className="input validator"
              name="businessName"
              id="businessName"
              required
              placeholder="Business Name"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="2"
              maxLength="30"
              title="Only letters, numbers or dash"
            />
            <p className="validator-hint">
              Must be 2 to 30 characters , containing only letters, numbers or
              dash
            </p>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="sellInfo" className="text-black mb-2">
              What do you sell
            </label>
            <textarea
              type="text"
              className=" textarea validator resize-none h-40"
              name="sellInfo"
              id="sellInfo"
              required
              placeholder="A subscription-based email automation tool for small businesses"
              pattern="^[A-Za-z0-9 .-]+$"
              minLength="10"
              maxLength="100"
              title="Only letters, numbers or dash"
            />
            <p className="validator-hint">
              Must be 10 to 200 characters
              <br />
              containing only letters, numbers,space, dot or dash
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col mb-4">
            <label htmlFor="businessType" className="text-black mb-2">
              What's your business type?
            </label>

            <select
              className="select validator"
              id="businessType"
              name="buinessType"
              required
            >
              <option disabled value="">
                Choose:
              </option>
              <option value="SaaS">SaaS</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Coaching">Coaching</option>
              <option value="Fintech">Fintech</option>
            </select>
            <p className="validator-hint">Required</p>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="usp" className="text-black mb-2">
              What problem do you solve?
            </label>
            <textarea
              type="text"
              className="textarea validator resize-none h-40"
              name="usp"
              id="usp"
              required
              placeholder="We help small businesses automate their email marketing"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="2"
              maxLength="50"
              title="Only letters, numbers or dash"
            />

            <p className="validator-hint">
              Must be 2 to 50 characters
              <br />
              containing only letters, numbers or dash
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form1;
