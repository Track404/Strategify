import FormButton from './FormButton';

function Form2({ isActive, formData, setFormData, setActiveForm, activeForm }) {
  if (!isActive) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveForm(3);
  };

  return (
    <>
      <h1 className="text-primary font-bold text-4xl mt-4 mb-8 text-center">
        🧑‍💼 Target Audience
      </h1>

      <div className="w-full md:max-w-6xl md:mx-auto md:px-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Customer Info Card */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title text-primary mb-4">
                  Customer Profile
                </h2>

                {/* Ideal Customer */}
                <div className="form-control flex flex-col mb-4">
                  <label htmlFor="idealCustomer" className="label mb-2">
                    <span className="label-text font-medium">
                      Who is your ideal customer?
                    </span>
                  </label>
                  <select
                    className="select select-bordered validator"
                    id="idealCustomer"
                    name="idealCustomer"
                    value={formData.idealCustomer}
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        idealCustomer: e.target.value,
                      })
                    }
                  >
                    <option disabled value="">
                      Choose:
                    </option>
                    <option value="solopreneurs">Solopreneurs</option>
                    <option value="small teams">Small Teams</option>
                    <option value="marketers">Marketers</option>
                    <option value="developers">Developers</option>
                  </select>
                  <p className="validator-hint">Required</p>
                </div>

                {/* Pain Points */}
                <div className="form-control flex flex-col">
                  <label htmlFor="painPoints" className="label mb-2">
                    <span className="label-text font-medium">
                      Customer pain points/challenges?
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered validator resize-none"
                    name="painPoints"
                    id="painPoints"
                    required
                    placeholder="Helps generate empathy-based messaging"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength="2"
                    maxLength="50"
                    title="Only letters, numbers or dash"
                    rows="4"
                    value={formData.painPoints}
                    onChange={(e) =>
                      setFormData({ ...formData, painPoints: e.target.value })
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

            {/* Demographics Card */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title text-primary mb-4">
                  Demographics (Optional)
                </h2>

                {/* Age */}
                <div className="form-control mb-4">
                  <label htmlFor="age" className="input validator">
                    <span className="label font-medium">Age</span>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      placeholder="18-65"
                      min="1"
                      max="99"
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                      value={formData.age}
                    />
                  </label>
                </div>

                {/* Location */}
                <div className="form-control mb-4">
                  <label htmlFor="location" className="input validator">
                    <span className="label font-medium">Location</span>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Europe"
                      pattern="^[A-Za-z ]+$"
                      minLength="2"
                      maxLength="30"
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      value={formData.location}
                    />
                  </label>
                </div>

                {/* Job Role */}
                <div className="form-control mb-4">
                  <label htmlFor="jobrole" className="input validator">
                    <span className="label font-medium">Job Role</span>
                    <input
                      type="text"
                      name="jobrole"
                      id="jobrole"
                      placeholder="Marketing Manager"
                      pattern="^[A-Za-z ]+$"
                      minLength="2"
                      maxLength="30"
                      onChange={(e) =>
                        setFormData({ ...formData, jobrole: e.target.value })
                      }
                      value={formData.jobrole}
                    />
                  </label>
                </div>

                {/* Validation Hints */}
                <div className="space-y-1 text-sm">
                  <p className="validator-hint">
                    Age: Must be 1 to 99 years old
                  </p>
                  <p className="validator-hint">
                    Location, Job role: Must be 2 to 30 characters containing
                    only letters and space
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

export default Form2;
