import FormButton from './FormButton';
import { useState } from 'react';
function Form2({ isActive, formData, setFormData, setActiveForm, activeForm }) {
  const [isChecked, setIsChecked] = useState(true);
  if (!isActive) return null;
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setActiveForm(5); // Call the nextStep function
  };

  // This component renders the first form in a multi-step form process.
  return (
    <>
      <h1 className="text-black font-bold text-4xl mt-4 mb-4">
        Marketing Preferences
      </h1>

      <form className="flex flex-col " onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="marketingChannel" className="text-black mb-2">
            Which marketing channels have you tried/want to try?
          </label>

          <select
            className="select validator"
            id="marketingChannel"
            name="marketingChannel"
            value={formData.marketingChannel}
            required
            onChange={(e) =>
              setFormData({ ...formData, marketingChannel: e.target.value })
            }
          >
            <option disabled selected value="">
              Choose:
            </option>
            <option defaultValue="SEO">SEO</option>
            <option value="Paid Ads">Paid Ads(Google/Facebook)</option>
            <option value="Email Marketing">Email Marketing</option>
            <option value="Content Marketing">Content Marketing</option>
            <option value="Social Media">Social Media</option>
            <option value="Influencer/Partnerships">
              Influencer/Partnerships
            </option>
            <option value="Events/Webinars">Events/Webinars</option>
          </select>
          <p className="validator-hint">Required</p>
        </div>
        <div className="form-control w-fit flex flex-row items-center gap-4">
          <label className="label cursor-pointer">
            <span className="label-text font-medium text-gray-700">
              Do you have an existing audience?
            </span>
            <input
              type="checkbox"
              className="toggle toggle-primary ml-3"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              aria-label="Toggle agreement"
            />
          </label>

          <span
            className={`text-sm font-semibold ${
              isChecked ? 'text-green-600' : 'text-red-500'
            }`}
          >
            {isChecked ? 'Yes' : 'No'}
          </span>
        </div>

        <div className="flex flex-col mb-4">
          <textarea
            type="text"
            className="textarea validator resize-none h-40"
            name="existingAudience"
            id="existingAudience"
            disabled={!isChecked}
            required
            placeholder="email list, Instagram, LinkedIn, etc"
            pattern="^[A-Za-z0-9 .-]+$"
            minLength="2"
            maxLength="30"
            value={formData.existingAudience}
            onChange={(e) =>
              setFormData({ ...formData, existingAudience: e.target.value })
            }
          />

          <p className="validator-hint">
            Must be 2 to 30 characters , containing only letters, numbers or
            dash
          </p>
        </div>
        <FormButton setActiveForm={setActiveForm} activeForm={activeForm} />
      </form>
    </>
  );
}

export default Form2;
