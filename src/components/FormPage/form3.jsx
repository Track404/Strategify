import FormButton from './FormButton';

function Form3({ isActive, formData, setFormData, setActiveForm, activeForm }) {
  if (!isActive) return null;
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setActiveForm(4); // Call the nextStep function
  };
  // This component renders the first form in a multi-step form process.
  return (
    <>
      <h1 className="text-black font-bold text-4xl mt-4 mb-4">
        Target Audience
      </h1>
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="goal" className="text-black mb-2">
            What is yout main goal ?
          </label>
          <textarea
            type="text"
            className="textarea validator resize-none h-40"
            name="goal"
            id="goal"
            required
            placeholder="“Get 100 beta signups,” “Reach $5k MRR,” etc."
            pattern="^[A-Za-z0-9 .-]+$"
            minLength="2"
            maxLength="30"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
          />

          <p className="validator-hint">
            Must be 2 to 30 characters , containing only letters, numbers or
            dash
          </p>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="preferredTime" className="text-black mb-2">
            Who is your Preferred timeline ?
          </label>

          <select
            className="select validator"
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            required
            onChange={(e) =>
              setFormData({ ...formData, preferredTime: e.target.value })
            }
          >
            <option disabled selected value="">
              Choose:
            </option>
            <option defaultValue="30">30 days</option>
            <option value="60">60 days</option>
            <option value="90">90 days</option>
            <option value="120">120 days</option>
          </select>
          <p className="validator-hint">Required</p>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="budget" className="text-black mb-2">
            What is your budget?(optional)
          </label>
          <input
            type="range"
            min={0}
            max="100000"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
            className="range range-primary range-sm"
          />
          <p className="text-black font-medium mt-2">
            {formData.budget === undefined || formData.budget === ''
              ? 'No budget'
              : `Budget: $${formData.budget}`}
          </p>
        </div>
        <FormButton setActiveForm={setActiveForm} activeForm={activeForm} />
      </form>
    </>
  );
}

export default Form3;
