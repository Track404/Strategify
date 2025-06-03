import FormButton from './FormButton';

function Form1({ isActive, formData, setFormData, setActiveForm, activeForm }) {
  if (!isActive) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setActiveForm(2); // Call the nextStep function
  };

  // This component renders the first form in a multi-step form process.
  return (
    <>
      <h1 className="text-primary font-bold text-4xl mt-4 mb-8 text-center">
        🔧 Business Info
      </h1>

      <div className="w-full md:max-w-6xl md:mx-auto md:px-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Business Details Card */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title text-primary mb-4">
                  Business Details
                </h2>

                {/* Business Name */}
                <div className="form-control flex flex-col mb-4">
                  <label htmlFor="businessName" className="label mb-2">
                    <span className="label-text font-medium">
                      Business Name
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered validator"
                    name="businessName"
                    id="businessName"
                    required
                    placeholder="Business Name"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength="2"
                    maxLength="30"
                    title="Only letters, numbers or dash"
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    value={formData.businessName}
                  />
                  <p className="validator-hint">
                    Must be 2 to 30 characters, containing only letters, numbers
                    or dash
                  </p>
                </div>

                {/* What do you sell */}
                <div className="form-control flex flex-col">
                  <label htmlFor="sellInfo" className="label mb-2">
                    <span className="label-text font-medium">
                      What do you sell
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered validator resize-none"
                    name="sellInfo"
                    id="sellInfo"
                    required
                    placeholder="A subscription-based email automation tool for small businesses"
                    pattern="^[A-Za-z0-9 .-]+$"
                    minLength="10"
                    maxLength="100"
                    title="Only letters, numbers or dash"
                    rows="4"
                    value={formData.sellInfo}
                    onChange={(e) =>
                      setFormData({ ...formData, sellInfo: e.target.value })
                    }
                  />
                  <p className="validator-hint">
                    Must be 10 to 100 characters
                    <br />
                    containing only letters, numbers, space, dot or dash
                  </p>
                </div>
              </div>
            </div>

            {/* Business Type & Problem Card */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title text-primary mb-4">
                  Business Profile
                </h2>

                {/* Business Type */}
                <div className="form-control flex flex-col mb-4">
                  <label htmlFor="businessType" className="label mb-2">
                    <span className="label-text font-medium">
                      What's your business type?
                    </span>
                  </label>
                  <select
                    className="select select-bordered validator"
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, businessType: e.target.value })
                    }
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

                {/* Problem you solve */}
                <div className="form-control flex flex-col">
                  <label htmlFor="usp" className="label mb-2">
                    <span className="label-text font-medium">
                      What problem do you solve?
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered validator resize-none"
                    name="usp"
                    id="usp"
                    required
                    placeholder="We help small businesses automate their email marketing"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength="2"
                    maxLength="50"
                    title="Only letters, numbers or dash"
                    rows="4"
                    value={formData.usp}
                    onChange={(e) =>
                      setFormData({ ...formData, usp: e.target.value })
                    }
                  />
                  <p className="validator-hint">
                    Must be 2 to 50 characters
                    <br />
                    containing only letters, numbers or dash
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Buttons */}

          <FormButton setActiveForm={setActiveForm} activeForm={activeForm} />
        </form>
      </div>
    </>
  );
}

export default Form1;
