import FormButton from './FormButton';

function Form3({ isActive, formData, setFormData, setActiveForm, activeForm }) {
  if (!isActive) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveForm(4);
  };

  return (
    <>
      <h1 className="text-primary font-bold text-4xl mt-4 mb-8 text-center">
        🎯 Goals
      </h1>

      <div className="w-full md:max-w-6xl md:mx-auto md:px-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Main Goal Card */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title text-primary mb-4">Main Goal</h2>
                <div className="form-control flex flex-col">
                  <label htmlFor="goal" className="label mb-2">
                    <span className="label-text font-medium">
                      What is your main goal?
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered validator resize-none"
                    name="goal"
                    id="goal"
                    required
                    placeholder='"Get 100 beta signups," "Reach $5k MRR," etc.'
                    pattern="^[A-Za-z0-9 .-]+$"
                    minLength="2"
                    maxLength="100"
                    rows="4"
                    value={formData.goal}
                    onChange={(e) =>
                      setFormData({ ...formData, goal: e.target.value })
                    }
                  />
                  <p className="validator-hint">
                    Must be 2 to 100 characters, containing only letters,
                    numbers or dash
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Card */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title text-primary mb-4">Timeline</h2>
                <div className="form-control flex flex-col">
                  <label htmlFor="preferredTime" className="label mb-2">
                    <span className="label-text font-medium">
                      What is your preferred timeline?
                    </span>
                  </label>
                  <select
                    className="select select-bordered validator"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredTime: e.target.value,
                      })
                    }
                  >
                    <option disabled value="">
                      Choose timeline:
                    </option>
                    <option value="30">30 days</option>
                    <option value="60">60 days</option>
                    <option value="90">90 days</option>
                    <option value="120">120 days</option>
                  </select>
                  <p className="validator-hint">Required</p>
                </div>
              </div>
            </div>
          </div>

          {/* Budget Card - Full Width */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-primary mb-4">
                Budget (Optional)
              </h2>
              <div className="form-control flex flex-col">
                <label htmlFor="budget" className="label mb-2">
                  <span className="label-text font-medium">
                    What is your budget?
                  </span>
                </label>
                <input
                  type="range"
                  min={0}
                  max="100000"
                  value={formData.budget || 0}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="range range-primary range-sm w-full"
                />
                <div className="w-full flex justify-between text-xs px-2 mt-1">
                  <span>$0</span>
                  <span>$25k</span>
                  <span>$50k</span>
                  <span>$75k</span>
                  <span>$100k</span>
                </div>
                <div className="text-center mt-4">
                  <span className="text-lg font-semibold text-primary">
                    {formData.budget === undefined ||
                    formData.budget === '' ||
                    formData.budget === '0'
                      ? 'No budget set'
                      : `Budget: $${parseInt(
                          formData.budget
                        ).toLocaleString()}`}
                  </span>
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

export default Form3;
