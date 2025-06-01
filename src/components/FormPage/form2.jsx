import FormButton from './FormButton';

function Form1({ isActive, formData, setFormData, setActiveForm, activeForm }) {
  if (!isActive) return null;
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setActiveForm(3); // Call the nextStep function
  };
  // This component renders the first form in a multi-step form process.
  return (
    <>
      <h1 className="text-black font-bold text-4xl mt-4 mb-4">
        Target Audience
      </h1>
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <div className="flex  gap-15">
          <div>
            <div className="flex flex-col mb-4">
              <label htmlFor="idealCustomer" className="text-black mb-2">
                Who is your ideal customer?
              </label>

              <select
                className="select validator"
                id="idealCustomer"
                name="idealCustomer"
                value={formData.idealCustomer}
                required
                onChange={(e) =>
                  setFormData({ ...formData, idealCustomer: e.target.value })
                }
              >
                <option disabled selected value="">
                  Choose:
                </option>
                <option defaultValue="solopreneurs">solopreneurs</option>
                <option value="small teams">small teams</option>
                <option value="marketers">marketers</option>
                <option value="developers">developers</option>
              </select>
              <p className="validator-hint">Required</p>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="usp" className="text-black mb-2">
                Customer pain points/challenges?
              </label>
              <textarea
                type="text"
                className="textarea validator resize-none h-40"
                name="painPoints"
                id="painPoints"
                required
                placeholder="Helps generate empathy-based messaging"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength="2"
                maxLength="50"
                title="Only letters, numbers or dash"
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
          <div>
            <div className="flex flex-col mb-4">
              <h2 className="mb-2">Customer demographics (optional)</h2>
              <label htmlFor="age" className="input validator text-black mb-4">
                <span className="label ">Age</span>
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
              <label
                htmlFor="location"
                className="input validator text-black mb-4"
              >
                <span className="label w-20">Location</span>
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
              <label
                htmlFor="jobrole"
                className="input validator text-black mb-4"
              >
                <span className="label">Job role</span>
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
              <p className="validator-hint">Age: Must be 1 to 99 years old</p>
              <p className="validator-hint">
                Location, Job role: Must be 2 to 30 characters containing only
                letters and space
              </p>
            </div>
          </div>
        </div>

        <FormButton setActiveForm={setActiveForm} activeForm={activeForm} />
      </form>
    </>
  );
}

export default Form1;
